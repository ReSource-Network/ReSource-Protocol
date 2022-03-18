const fs = require("fs")
const chalk = require("chalk")

import "@nomiclabs/hardhat-waffle"
import "@typechain/hardhat"
import "@tenderly/hardhat-tenderly"
import "hardhat-deploy"
import "@openzeppelin/hardhat-upgrades"
import "hardhat-gas-reporter"
import "solidity-coverage"
import "hardhat-contract-sizer"

import { utils } from "ethers"

import { HardhatUserConfig, task } from "hardhat/config"
import { HttpNetworkUserConfig } from "hardhat/types"

import "./tasks/accounts"
import "./tasks/clean"
import "./tasks/rewards"

const { isAddress, getAddress, formatUnits, parseUnits } = utils

//
// Select the network you want to deploy to here:
//
const defaultNetwork = "localhost"

function mnemonic() {
  const path = "./mnemonic.txt"
  if (fs.existsSync(path)) {
    try {
      return fs
        .readFileSync("./mnemonic.txt")
        .toString()
        .trim()
    } catch (e) {
      console.log("Mnemonic: ", e)
    }
  } else {
    return ""
  }
}

enum chainIds {
  celoLocal = 1337,
  localhost = 31337,
  testnet = 44787,
  mainnet = 42220,
}

const config: HardhatUserConfig = {
  defaultNetwork,

  networks: {
    localhost: {
      url: "http://localhost:8545",
      chainId: chainIds.localhost,
      saveDeployments: true,
      tags: ["local", "testing"],
    },
    celolocal: {
      url: "http://localhost:8545",
      chainId: chainIds.celoLocal,
      saveDeployments: true,
      tags: ["local", "testing", "celo"],
    },
    "celo-alfajores": {
      url: "https://alfajores-forno.celo-testnet.org",
      chainId: chainIds.testnet,
      accounts: { mnemonic: mnemonic() },
      saveDeployments: true,
      tags: ["alfajores", "staging"],
    },
    celo: {
      url: "http://127.0.0.1:1248",
      chainId: chainIds.mainnet,
      saveDeployments: true,
      tags: ["production", "mainnet"],
    },
    "frame-celo-alfajores": {
      url: "http://127.0.0.1:1248",
      chainId: chainIds.testnet,
      saveDeployments: true,
    },
  },
  solidity: {
    compilers: [
      { version: "0.8.0" },
      { version: "0.8.7", settings: {} },
      {
        version: "0.5.13",
        settings: {
          evmVersion: "istanbul",
        },
      },
      {
        version: "0.6.11",
        settings: {},
      },
      {
        version: "0.7.6",
        settings: {},
      },
    ],
  },
  namedAccounts: {
    deployer: {
      default: 0,
    },
    relaySigner: "0xe105fb303e5ffee9e27726267e2db11c37260865",
  },
  paths: {
    artifacts: "./artifacts",
    cache: "./cache",
    sources: "./contracts",
    tests: "./test",
    deployments: "./deployments",
    deploy: "./deploy",
    imports: "./artifacts",
  },

  typechain: {
    outDir: "types",
    target: "ethers-v5",
  },
}

export default config

const DEBUG = false

function debug(text) {
  if (DEBUG) {
    console.log(text)
  }
}

task("wallet", "Create a wallet (pk) link", async (_, { ethers }) => {
  const randomWallet = ethers.Wallet.createRandom()
  const privateKey = randomWallet._signingKey().privateKey
  // console.log("🔐 WALLET Generated as " + randomWallet.address + "")
  // console.log("pk: " + privateKey)
  console.log(randomWallet.address)
  console.log(privateKey)
})

task("fundedwallet", "Create a wallet (pk) link and fund it with deployer?")
  .addOptionalParam("amount", "Amount of ETH to send to wallet after generating")
  .addParam("address", "Address to fund")
  .addOptionalParam("url", "URL to add pk to")
  .setAction(async (taskArgs, { network, ethers }) => {
    let url = taskArgs.url ? taskArgs.url : "http://localhost:3000"

    let localDeployerMnemonic
    try {
      localDeployerMnemonic = fs.readFileSync("./mnemonic.txt")
      localDeployerMnemonic = localDeployerMnemonic.toString().trim()
    } catch (e) {
      /* do nothing - this file isn't always there */
    }

    let amount = taskArgs.amount ? taskArgs.amount : "0.01"
    let address = taskArgs.address
    const tx = {
      to: address,
      value: ethers.utils.parseEther(amount),
    }
    console.log("💵 Sending " + amount + " ETH to " + address + " using local node")
    return send(ethers.provider.getSigner(), tx)
  })

task("generate", "Create a mnemonic for builder deploys", async (_, { ethers }) => {
  const bip39 = require("bip39")
  const hdkey = require("ethereumjs-wallet/hdkey")
  const mnemonic = bip39.generateMnemonic()
  if (DEBUG) console.log("mnemonic", mnemonic)
  const seed = await bip39.mnemonicToSeed(mnemonic)
  if (DEBUG) console.log("seed", seed)
  const hdwallet = hdkey.fromMasterSeed(seed)
  const wallet_hdpath = "m/44'/60'/0'/0/"
  const account_index = 0
  let fullPath = wallet_hdpath + account_index
  if (DEBUG) console.log("fullPath", fullPath)
  const wallet = hdwallet.derivePath(fullPath).getWallet()
  const privateKey = "0x" + wallet._privKey.toString("hex")
  if (DEBUG) console.log("privateKey", privateKey)
  var EthUtil = require("ethereumjs-util")
  const address = "0x" + EthUtil.privateToAddress(wallet._privKey).toString("hex")
  console.log("🔐 Account Generated as " + address + " and set as mnemonic in packages/hardhat")
  console.log("💬 Use 'yarn run account' to get more information about the deployment account.")

  fs.writeFileSync("./" + address + ".txt", mnemonic.toString())
  fs.writeFileSync("./mnemonic.txt", mnemonic.toString())
})

task("mineContractAddress", "Looks for a deployer account that will give leading zeros")
  .addParam("searchFor", "String to search for")
  .setAction(async (taskArgs, { network, ethers }) => {
    let contract_address = ""
    let address

    const bip39 = require("bip39")
    const hdkey = require("ethereumjs-wallet/hdkey")

    let mnemonic = ""
    while (contract_address.indexOf(taskArgs.searchFor) != 0) {
      mnemonic = bip39.generateMnemonic()
      if (DEBUG) console.log("mnemonic", mnemonic)
      const seed = await bip39.mnemonicToSeed(mnemonic)
      if (DEBUG) console.log("seed", seed)
      const hdwallet = hdkey.fromMasterSeed(seed)
      const wallet_hdpath = "m/44'/60'/0'/0/"
      const account_index = 0
      let fullPath = wallet_hdpath + account_index
      if (DEBUG) console.log("fullPath", fullPath)
      const wallet = hdwallet.derivePath(fullPath).getWallet()
      const privateKey = "0x" + wallet._privKey.toString("hex")
      if (DEBUG) console.log("privateKey", privateKey)
      var EthUtil = require("ethereumjs-util")
      address = "0x" + EthUtil.privateToAddress(wallet._privKey).toString("hex")

      const rlp = require("rlp")
      const keccak = require("keccak")

      let nonce = 0x00 //The nonce must be a hex literal!
      let sender = address

      let input_arr = [sender, nonce]
      let rlp_encoded = rlp.encode(input_arr)

      let contract_address_long = keccak("keccak256")
        .update(rlp_encoded)
        .digest("hex")

      contract_address = contract_address_long.substring(24) //Trim the first 24 characters.
    }

    console.log("⛏  Account Mined as " + address + " and set as mnemonic in packages/hardhat")
    console.log("📜 This will create the first contract: " + chalk.magenta("0x" + contract_address))
    console.log("💬 Use 'yarn run account' to get more information about the deployment account.")

    fs.writeFileSync("./" + address + "_produces" + contract_address + ".txt", mnemonic.toString())
    fs.writeFileSync("./mnemonic.txt", mnemonic.toString())
  })

task("account", "Get balance informations for the deployment account.", async (_, { ethers }) => {
  const hdkey = require("ethereumjs-wallet/hdkey")
  const bip39 = require("bip39")
  let mnemonic = fs
    .readFileSync("./mnemonic.txt")
    .toString()
    .trim()
  if (DEBUG) console.log("mnemonic", mnemonic)
  const seed = await bip39.mnemonicToSeed(mnemonic)
  if (DEBUG) console.log("seed", seed)
  const hdwallet = hdkey.fromMasterSeed(seed)
  const wallet_hdpath = "m/44'/60'/0'/0/"
  const account_index = 0
  let fullPath = wallet_hdpath + account_index
  if (DEBUG) console.log("fullPath", fullPath)
  const wallet = hdwallet.derivePath(fullPath).getWallet()
  const privateKey = "0x" + wallet._privKey.toString("hex")
  if (DEBUG) console.log("privateKey", privateKey)
  var EthUtil = require("ethereumjs-util")
  const address = "0x" + EthUtil.privateToAddress(wallet._privKey).toString("hex")

  var qrcode = require("qrcode-terminal")
  qrcode.generate(address)
  console.log("‍📬 Deployer Account is " + address)
  for (let n in config.networks) {
    //console.log(config.networks[n],n)
    try {
      let provider = new ethers.providers.JsonRpcProvider(
        (config.networks[n] as HttpNetworkUserConfig).url
      )
      let balance = await provider.getBalance(address)
      console.log(" -- " + n + " --  -- -- 📡 ")
      console.log("   balance: " + ethers.utils.formatEther(balance))
      console.log("   nonce: " + (await provider.getTransactionCount(address)))
    } catch (e) {
      if (DEBUG) {
        console.log(e)
      }
    }
  }
})

async function addr(ethers, addr) {
  if (isAddress(addr)) {
    return getAddress(addr)
  }
  const accounts = await ethers.provider.listAccounts()
  if (accounts[addr] !== undefined) {
    return accounts[addr]
  }
  throw `Could not normalize address: ${addr}`
}

task("accounts", "Prints the list of accounts", async (_, { ethers }) => {
  const accounts = await ethers.provider.listAccounts()
  accounts.forEach((account) => console.log(account))
})

task("blockNumber", "Prints the block number", async (_, { ethers }) => {
  const blockNumber = await ethers.provider.getBlockNumber()
  console.log(blockNumber)
})

task("balance", "Prints an account's balance")
  .addParam("account", "The account's address")
  .setAction(async (taskArgs, { ethers }) => {
    const balance = await ethers.provider.getBalance(await addr(ethers, taskArgs.account))
    console.log(formatUnits(balance, "ether"), "ETH")
  })

function send(signer, txparams) {
  return signer.sendTransaction(txparams, (error, transactionHash) => {
    if (error) {
      debug(`Error: ${error}`)
    }
    debug(`transactionHash: ${transactionHash}`)
    // checkForReceipt(2, params, transactionHash, resolve)
  })
}

task("send", "Send ETH")
  .addParam("from", "From address or account index")
  .addOptionalParam("to", "To address or account index")
  .addOptionalParam("amount", "Amount to send in ether")
  .addOptionalParam("data", "Data included in transaction")
  .addOptionalParam("gasPrice", "Price you are willing to pay in gwei")
  .addOptionalParam("gasLimit", "Limit of how much gas to spend")

  .setAction(async (taskArgs, { network, ethers }) => {
    const from = await addr(ethers, taskArgs.from)
    debug(`Normalized from address: ${from}`)
    const fromSigner = await ethers.provider.getSigner(from)

    let to
    if (taskArgs.to) {
      to = await addr(ethers, taskArgs.to)
      debug(`Normalized to address: ${to}`)
    }

    const txRequest = {
      value: parseUnits(taskArgs.amount ? taskArgs.amount : "0", "ether").toHexString(),
      from: await fromSigner.getAddress(),
      to,
    }

    return send(fromSigner, txRequest)
  })

task("sendSource", "Send SOURCE")
  .addParam("to", "Address to send SOURCE to ")
  .addParam("amount", "Amount of Source to send to to address")
  .setAction(async (taskArgs, { ethers, network }) => {
    const deploymentPath = `./deployments/${network.name}/SourceToken.json`
    const ReSourceTokenDeployment = fs.readFileSync(deploymentPath).toString()
    const ReSourceTokenAddress = JSON.parse(ReSourceTokenDeployment)["address"]

    if (!ReSourceTokenAddress) throw new Error("token not deployed on this network")

    const to = await addr(ethers, taskArgs.to)
    const amount = ethers.utils.parseEther(taskArgs.amount)
    debug(`Normalized to address: ${to}`)
    const signer = (await ethers.getSigners())[0]

    const SourceTokenFactory = await ethers.getContractFactory("SourceToken")

    const tokenContract = new ethers.Contract(
      ReSourceTokenAddress,
      SourceTokenFactory.interface,
      signer
    )

    try {
      await (await tokenContract.transfer(to, amount)).wait()
      console.log("Funds transfered")
    } catch (e) {
      console.log(e)
    }
  })

task("grantAmbassador", "grant ambassador")
  .addParam("address", "Address to grant ambassadorship")
  .addParam("allowance", "Ambassador credit allowance")
  .setAction(async (taskArgs, { ethers, network }) => {
    const deploymentPath = `./deployments/${network.name}/NetworkRoles.json`
    const networkRolesDeployment = fs.readFileSync(deploymentPath).toString()
    const networkRolesAddress = JSON.parse(networkRolesDeployment)["address"]

    if (!networkRolesAddress) throw new Error("network roles not deployed on this network")

    const ambassadorAddress = await addr(ethers, taskArgs.address)
    const allowance = ethers.utils.parseUnits(taskArgs.allowance, "mwei")
    debug(`Normalized to address: ${ambassadorAddress}`)
    const signer = (await ethers.getSigners())[0]

    const networkRolesFactory = await ethers.getContractFactory("NetworkRoles")

    const networkRoles = new ethers.Contract(
      networkRolesAddress,
      networkRolesFactory.interface,
      signer
    )

    try {
      await (await networkRoles.grantAmbassador(ambassadorAddress, allowance)).wait()
      console.log("Ambassador Granted")
    } catch (e) {
      console.log(e)
    }
  })

task("grantUnderwriter", "grant underwriter")
  .addParam("address", "Address to grant underwriter")
  .setAction(async (taskArgs, { ethers, network }) => {
    const deploymentPath = `./deployments/${network.name}/CreditRoles.json`
    const creditRolesDeployment = fs.readFileSync(deploymentPath).toString()
    const creditRolesAddress = JSON.parse(creditRolesDeployment)["address"]

    if (!creditRolesAddress) throw new Error("credit roles not deployed on this network")

    const underwriterAddress = await addr(ethers, taskArgs.address)
    debug(`Normalized to address: ${underwriterAddress}`)
    const signer = (await ethers.getSigners())[0]

    const creditRolesFactory = await ethers.getContractFactory("CreditRoles")

    const creditRoles = new ethers.Contract(
      creditRolesAddress,
      creditRolesFactory.interface,
      signer
    )

    try {
      await (await creditRoles.grantUnderwriter(underwriterAddress)).wait()
      console.log("Underwriter Granted")
    } catch (e) {
      console.log(e)
    }
  })

task("grantRequestOperator", "grant request operator")
  .addParam("address", "Address to grant request operator")
  .setAction(async (taskArgs, { ethers, network }) => {
    const deploymentPath = `./deployments/${network.name}/CreditRoles.json`
    const creditRolesDeployment = fs.readFileSync(deploymentPath).toString()
    const creditRolesAddress = JSON.parse(creditRolesDeployment)["address"]

    if (!creditRolesAddress) throw new Error("credit roles not deployed on this network")

    const requestAddress = await addr(ethers, taskArgs.address)
    debug(`Normalized to address: ${requestAddress}`)
    const signer = (await ethers.getSigners())[0]

    const creditRolesFactory = await ethers.getContractFactory("CreditRoles")

    const creditRoles = new ethers.Contract(
      creditRolesAddress,
      creditRolesFactory.interface,
      signer
    )

    try {
      await (await creditRoles.grantRequestOperator(requestAddress)).wait()
      console.log("Request Operator Granted")
    } catch (e) {
      console.log(e)
    }
  })

task("grantNetworkOperator", "grant request operator")
  .addParam("address", "Address to grant request operator")
  .setAction(async (taskArgs, { ethers, network }) => {
    const deploymentPath = `./deployments/${network.name}/CreditRoles.json`
    const creditRolesDeployment = fs.readFileSync(deploymentPath).toString()
    const creditRolesAddress = JSON.parse(creditRolesDeployment)["address"]

    if (!creditRolesAddress) throw new Error("credit roles not deployed on this network")

    const requestAddress = await addr(ethers, taskArgs.address)
    debug(`Normalized to address: ${requestAddress}`)
    const signer = (await ethers.getSigners())[0]

    const creditRolesFactory = await ethers.getContractFactory("CreditRoles")

    const creditRoles = new ethers.Contract(
      creditRolesAddress,
      creditRolesFactory.interface,
      signer
    )

    try {
      await (await creditRoles.grantRequestOperator(requestAddress)).wait()
      console.log("Request Operator Granted")
    } catch (e) {
      console.log(e)
    }
  })
