import { HardhatRuntimeEnvironment } from "hardhat/types"
import { DeployFunction } from "hardhat-deploy/types"
import { deployProxyAndSave } from "../utils/utils"
import { ReSourceToken } from "../types/ReSourceToken"
import { ethers } from "hardhat"
import { UnderwriteManager } from "../types/UnderwriteManager"
import { IKeyWalletDeployer } from "../types/IKeyWalletDeployer"
import { IKeyWalletDeployer__factory } from "../../source-dapp/src/contracts/factories/IKeyWalletDeployer__factory"
import { ReSourceToken__factory, UnderwriteManager__factory } from "../types"

const func: DeployFunction = async function(hardhat: HardhatRuntimeEnvironment) {
  const { relaySigner } = await hardhat.getNamedAccounts()

  let reSourceTokenAddress = (await hardhat.deployments.getOrNull("ReSourceToken"))?.address

  if (!reSourceTokenAddress) throw Error("SOURCE not deployed")

  //deploy walletDeployer contract
  const walletDeployerAbi = (await hardhat.artifacts.readArtifact("IiKeyWalletDeployer")).abi
  const walletDeployerAddress = await deployProxyAndSave(
    "iKeyWalletDeployer",
    [],
    hardhat,
    walletDeployerAbi,
  )

  //deploy network registry and transfer networkRegistry ownership
  const networkRegistryAbi = (await hardhat.artifacts.readArtifact("NetworkRegistry")).abi
  const networkArgs = [[], [relaySigner], walletDeployerAddress]
  const networkRegistryAddress = await deployProxyAndSave(
    "NetworkRegistry",
    networkArgs,
    hardhat,
    networkRegistryAbi,
  )

  try {
    const walletDeployer = new ethers.Contract(
      walletDeployerAddress,
      IKeyWalletDeployer__factory.createInterface(),
      (await hardhat.ethers.getSigners())[0],
    ) as IKeyWalletDeployer

    if ((await walletDeployer.owner()) !== networkRegistryAddress)
      await (await walletDeployer.transferOwnership(networkRegistryAddress)).wait()
  } catch (e) {
    console.log(e)
  }

  // underwriteManager deploy
  const underwriteManagerAbi = (await hardhat.artifacts.readArtifact("UnderwriteManager")).abi
  const underwriteManagerArgs = [reSourceTokenAddress]
  const underwriteManagerAddress = await deployProxyAndSave(
    "UnderwriteManager",
    underwriteManagerArgs,
    hardhat,
    underwriteManagerAbi,
  )

  const resourceToken = new ethers.Contract(
    reSourceTokenAddress,
    ReSourceToken__factory.createInterface(),
    (await hardhat.ethers.getSigners())[0],
  ) as ReSourceToken

  if (!(await resourceToken.isStakeableContract(underwriteManagerAddress)))
    await (await resourceToken.addStakeableContract(underwriteManagerAddress)).wait()

  // rUSD deploy
  const rUSDAbi = (await hardhat.artifacts.readArtifact("RUSD")).abi
  const rUSDArgs = [networkRegistryAddress, 20, underwriteManagerAddress, relaySigner]

  const RUSDAddress = await deployProxyAndSave("RUSD", rUSDArgs, hardhat, rUSDAbi, {
    initializer: "initializeRUSD",
  })

  const underwriteManager = new ethers.Contract(
    underwriteManagerAddress,
    UnderwriteManager__factory.createInterface(),
    (await hardhat.ethers.getSigners())[0],
  ) as UnderwriteManager

  if (!(await underwriteManager.networkContracts(RUSDAddress)))
    await underwriteManager.addNetwork(RUSDAddress)
}
export default func
func.tags = ["CIP36"]
