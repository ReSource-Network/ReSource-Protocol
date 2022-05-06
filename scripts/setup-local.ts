import { ethers, getNamedAccounts, network } from "hardhat"
import fs from "fs"
import { send } from "../hardhat.config"

const configFile = "./ledgerConfig.json"

async function main() {
  if (network.name !== "localhost") return

  const networkOperator = (await getNamedAccounts())["networkOperator"]

  const creditDeploymentPath = `./deployments/${network.name}/CreditRoles.json`
  const creditRolesDeployment = fs.readFileSync(creditDeploymentPath).toString()
  const creditRolesAddress = JSON.parse(creditRolesDeployment)["address"]

  if (!creditRolesAddress) throw new Error("credit roles not deployed on this network")

  const networkDeploymentPath = `./deployments/${network.name}/NetworkRoles.json`
  const networkRolesDeployment = fs.readFileSync(networkDeploymentPath).toString()
  const networkRolesAddress = JSON.parse(networkRolesDeployment)["address"]

  if (!networkRolesAddress) throw new Error("network roles not deployed on this network")

  const signer = (await ethers.getSigners())[0]

  const creditRolesFactory = await ethers.getContractFactory("CreditRoles")

  const creditRoles = new ethers.Contract(creditRolesAddress, creditRolesFactory.interface, signer)

  const networkRolesFactory = await ethers.getContractFactory("NetworkRoles")

  const networkRoles = new ethers.Contract(
    networkRolesAddress,
    networkRolesFactory.interface,
    signer
  )

  try {
    await (await creditRoles.grantRequestOperator(networkOperator)).wait()
    await (await creditRoles.grantUnderwriter(networkOperator)).wait()
    await (await networkRoles.grantOperator(networkOperator)).wait()

    let amount = ethers.utils.parseEther("1000")
    let address = networkOperator
    const tx = {
      to: address,
      value: amount,
    }
    await send(signer, tx)

    const sourceFactory = await ethers.getContractFactory("SourceToken")
    const sourceDeploymentPath = `./deployments/${network.name}/SourceToken.json`
    const sourceTokenDeployment = fs.readFileSync(sourceDeploymentPath).toString()
    const sourceTokenAddress = JSON.parse(sourceTokenDeployment)["address"]
    const source = new ethers.Contract(sourceTokenAddress, sourceFactory.interface, signer)
    await (await source.transfer(address, amount)).wait()

    await createConfig()

    const rUSDFactory = await ethers.getContractFactory("RUSD")
    const rUSDDeploymentPath = `./deployments/${network.name}/RUSD.json`
    const rUSDDeployment = JSON.parse(fs.readFileSync(rUSDDeploymentPath).toString()).address
    const rUSD = new ethers.Contract(rUSDDeployment, rUSDFactory.interface, signer)
    await (await rUSD.unpause()).wait()
  } catch (e) {
    console.log(e)
  }
  console.log("✅ environment provisioned.")
}

async function createConfig() {
  if (!fs.existsSync(configFile)) fs.writeFileSync(configFile, JSON.stringify({}, null, 2))

  const rUSDDeploymentPath = `./deployments/${network.name}/RUSD.json`
  const creditFeeManagerDeploymentPath = `./deployments/${network.name}/CreditFeeManager.json`
  const creditPoolDeploymentPath = `./deployments/${network.name}/CreditPool.json`
  const creditRequestDeploymentPath = `./deployments/${network.name}/CreditRequest.json`
  const sourceTokenDeploymentPath = `./deployments/${network.name}/SourceToken.json`
  const networkRolesDeploymentPath = `./deployments/${network.name}/NetworkRoles.json`

  const rUSDDeployment = JSON.parse(fs.readFileSync(rUSDDeploymentPath).toString()).address
  const creditFeeManagerDeployment = JSON.parse(
    fs.readFileSync(creditFeeManagerDeploymentPath).toString()
  ).address
  const creditPoolDeployment = JSON.parse(
    fs.readFileSync(creditPoolDeploymentPath).toString()
  ).address
  const creditRequestDeployment = JSON.parse(
    fs.readFileSync(creditRequestDeploymentPath).toString()
  ).address
  const sourceTokenDeployment = JSON.parse(
    fs.readFileSync(sourceTokenDeploymentPath).toString()
  ).address
  const networkRolesDeployment = JSON.parse(
    fs.readFileSync(networkRolesDeploymentPath).toString()
  ).address

  if (
    !rUSDDeployment ||
    !creditFeeManagerDeployment ||
    !creditPoolDeployment ||
    !creditRequestDeployment ||
    !sourceTokenDeployment ||
    !networkRolesDeployment
  )
    throw new Error("one or more contract not deployed on this network")

  const addresses = {
    RUSD_ADDRESS: rUSDDeployment,
    CREDIT_POOL_ADDRESS: creditPoolDeployment,
    CREDIT_REQUEST_ADDRESS: creditRequestDeployment,
    SOURCE_ADDRESS: sourceTokenDeployment,
    CREDIT_FEE_MANAGER_ADDRESS: creditFeeManagerDeployment,
    NETWORK_ROLES_ADDRESS: networkRolesDeployment,
  }

  fs.writeFileSync(configFile, JSON.stringify(addresses))
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })