/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  NetworkFeeManager,
  NetworkFeeManagerInterface,
} from "../NetworkFeeManager";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "ambassador",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "totalRewards",
        type: "uint256",
      },
    ],
    name: "AmbassadorRewardsUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "member",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "totalFee",
        type: "uint256",
      },
    ],
    name: "FeesCollected",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "totalRewards",
        type: "uint256",
      },
    ],
    name: "NetworkRewardsUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "claimer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "totalRewards",
        type: "uint256",
      },
    ],
    name: "RewardsClaimed",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "_members",
        type: "address[]",
      },
    ],
    name: "calculateAmbassadorRewards",
    outputs: [
      {
        internalType: "uint256",
        name: "totalRewards",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "_members",
        type: "address[]",
      },
    ],
    name: "calculateNetworkRewards",
    outputs: [
      {
        internalType: "uint256",
        name: "totalRewards",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "_members",
        type: "address[]",
      },
    ],
    name: "claimRewards",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_member",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_transactionAmount",
        type: "uint256",
      },
    ],
    name: "collectFees",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "creditFeeManager",
    outputs: [
      {
        internalType: "contract ICreditFeeManager",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "_members",
        type: "address[]",
      },
    ],
    name: "distributeFees",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "feeToken",
    outputs: [
      {
        internalType: "contract IERC20Upgradeable",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_creditFeeManager",
        type: "address",
      },
      {
        internalType: "address",
        name: "_networkRoles",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_totalFeePercent",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_ambassadorFeePercent",
        type: "uint256",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "networkRoles",
    outputs: [
      {
        internalType: "contract INetworkRoles",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "tokenAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenAmount",
        type: "uint256",
      },
    ],
    name: "recoverERC20",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_network",
        type: "address",
      },
    ],
    name: "setNetwork",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_ambassadorFeePercent",
        type: "uint256",
      },
    ],
    name: "updateAmbassadorFeePercent",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50612c8a806100206000396000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c8063a033fcd411610097578063dceed2ec11610066578063dceed2ec1461024a578063eb990c5914610268578063f2fde38b14610284578063f9f031df146102a0576100f5565b8063a033fcd4146101c6578063a1d71142146101e2578063a9f821ed146101fe578063c527ee1f1461022e576100f5565b8063647846a5116100d3578063647846a514610164578063715018a6146101825780638980f11f1461018c5780638da5cb5b146101a8576100f5565b8063166033f2146100fa57806333c2d1071461012a57806348bda6e414610146575b600080fd5b610114600480360381019061010f9190611f97565b6102bc565b6040516101219190612539565b60405180910390f35b610144600480360381019061013f919061200d565b610384565b005b61014e6104c4565b60405161015b9190612366565b60405180910390f35b61016c6104ea565b6040516101799190612381565b60405180910390f35b61018a610510565b005b6101a660048036038101906101a19190611f57565b610598565b005b6101b0610749565b6040516101bd91906122b4565b60405180910390f35b6101e060048036038101906101db9190611f57565b610773565b005b6101fc60048036038101906101f79190611e96565b610b24565b005b61021860048036038101906102139190611f97565b610c52565b6040516102259190612539565b60405180910390f35b61024860048036038101906102439190611f97565b610d2e565b005b610252611176565b60405161025f919061239c565b60405180910390f35b610282600480360381019061027d9190611ef0565b61119c565b005b61029e60048036038101906102999190611e96565b611496565b005b6102ba60048036038101906102b59190611f97565b61158e565b005b600080600090505b825181101561037e576000606b60008584815181106102e6576102e5612899565b5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050600081141561033a575061036b565b620f424063ffffffff1681606854610352919061265e565b61035c919061262d565b8361036791906125d7565b9250505b8080610376906127f2565b9150506102c4565b50919050565b606660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663e4807adf336040518263ffffffff1660e01b81526004016103df91906122b4565b60206040518083038186803b1580156103f757600080fd5b505afa15801561040b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061042f9190611fe0565b61046e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610465906124f9565b60405180910390fd5b620f424063ffffffff168111156104ba576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104b1906123f9565b60405180910390fd5b8060688190555050565b606560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b606760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b61051861186a565b73ffffffffffffffffffffffffffffffffffffffff16610536610749565b73ffffffffffffffffffffffffffffffffffffffff161461058c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161058390612479565b60405180910390fd5b6105966000611872565b565b606660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663e4807adf336040518263ffffffff1660e01b81526004016105f391906122b4565b60206040518083038186803b15801561060b57600080fd5b505afa15801561061f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106439190611fe0565b610682576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610679906124f9565b60405180910390fd5b606760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610713576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161070a90612499565b60405180910390fd5b61074561071e610749565b828473ffffffffffffffffffffffffffffffffffffffff166119389092919063ffffffff16565b5050565b6000603360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b606a60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614806108765750606660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663e4807adf336040518263ffffffff1660e01b815260040161082591906122b4565b60206040518083038186803b15801561083d57600080fd5b505afa158015610851573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108759190611fe0565b5b6108b5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108ac90612439565b60405180910390fd5b6000606560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663dbac960c606a60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16606954856040518463ffffffff1660e01b815260040161093a9392919061232f565b602060405180830381600087803b15801561095457600080fd5b505af1158015610968573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061098c919061203a565b90506109dd833083606760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166119be909392919063ffffffff16565b80606b60008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610a2c91906125d7565b92505081905550606560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663e00efe4a606a60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1685856040518463ffffffff1660e01b8152600401610ab4939291906122cf565b600060405180830381600087803b158015610ace57600080fd5b505af1158015610ae2573d6000803e3d6000fd5b505050507f9dc46f23cfb5ddcad0ae7ea2be38d47fec07bb9382ec7e564efc69e036dd66ce8382604051610b17929190612306565b60405180910390a1505050565b606660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663e4807adf336040518263ffffffff1660e01b8152600401610b7f91906122b4565b60206040518083038186803b158015610b9757600080fd5b505afa158015610bab573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bcf9190611fe0565b610c0e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c05906124f9565b60405180910390fd5b80606a60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600080600090505b8251811015610d28576000606b6000858481518110610c7c57610c7b612899565b5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490506000811415610cd05750610d15565b620f424063ffffffff1681606854620f424063ffffffff16610cf291906126b8565b610cfc919061265e565b610d06919061262d565b83610d1191906125d7565b9250505b8080610d20906127f2565b915050610c5a565b50919050565b60005b8151811015611172576000606b6000848481518110610d5357610d52612899565b5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490506000811415610da7575061115f565b6000606660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166358b7cc83858581518110610dfa57610df9612899565b5b60200260200101516040518263ffffffff1660e01b8152600401610e1e91906122b4565b60206040518083038186803b158015610e3657600080fd5b505afa158015610e4a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e6e9190611ec3565b90506000620f424063ffffffff1683606854610e8a919061265e565b610e94919061262d565b9050600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610f265780606c60003073ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610f1a91906125d7565b92505081905550610f7d565b80606c60008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610f7591906125d7565b925050819055505b7f29737e65e70838c34bf4c0b2b22bc09c78026e03eccf56733fe98b88b0a9067582606c60008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054604051610fed929190612306565b60405180910390a16000620f424063ffffffff1684606854620f424063ffffffff1661101991906126b8565b611023919061265e565b61102d919061262d565b905080606c60003073ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461107e91906125d7565b925050819055507f472963ee3ee02a5b3c4bde33f7335585fd237458119ffffa0bbe8be7f512dd0e606c60003073ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546040516110f39190612539565b60405180910390a16000606b600088888151811061111457611113612899565b5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550505050505b808061116a906127f2565b915050610d31565b5050565b606660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600060019054906101000a900460ff166111c45760008054906101000a900460ff16156111cd565b6111cc611a47565b5b61120c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161120390612459565b60405180910390fd5b60008060019054906101000a900460ff16159050801561125c576001600060016101000a81548160ff02191690831515021790555060016000806101000a81548160ff0219169083151502179055505b611264611a58565b84606560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555083606660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550606560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663964236636040518163ffffffff1660e01b8152600401602060405180830381600087803b15801561135057600080fd5b505af1158015611364573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113889190611ec3565b606760006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550620f424063ffffffff16821115611414576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161140b906123f9565b60405180910390fd5b620f424063ffffffff16821115611460576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611457906123f9565b60405180910390fd5b8260698190555081606881905550801561148f5760008060016101000a81548160ff0219169083151502179055505b5050505050565b61149e61186a565b73ffffffffffffffffffffffffffffffffffffffff166114bc610749565b73ffffffffffffffffffffffffffffffffffffffff1614611512576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161150990612479565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415611582576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611579906123d9565b60405180910390fd5b61158b81611872565b50565b61159781610d2e565b606660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663e4807adf336040518263ffffffff1660e01b81526004016115f291906122b4565b60206040518083038186803b15801561160a57600080fd5b505afa15801561161e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116429190611fe0565b1561171d576116d333606c60003073ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054606760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166119389092919063ffffffff16565b6000606c60003073ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506117ef565b6117a933606c60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054606760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166119389092919063ffffffff16565b6000606c60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505b7ffc30cddea38e2bf4d6ea7d3f9ed3b6ad7f176419f4963bd81318067a4aee73fe33606c60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205460405161185f929190612306565b60405180910390a150565b600033905090565b6000603360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081603360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b6119b98363a9059cbb60e01b8484604051602401611957929190612306565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050611ab1565b505050565b611a41846323b872dd60e01b8585856040516024016119df939291906122cf565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050611ab1565b50505050565b6000611a5230611b78565b15905090565b600060019054906101000a900460ff16611aa7576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611a9e906124d9565b60405180910390fd5b611aaf611b9b565b565b6000611b13826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611bfc9092919063ffffffff16565b9050600081511115611b735780806020019051810190611b339190611fe0565b611b72576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611b6990612519565b60405180910390fd5b5b505050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b600060019054906101000a900460ff16611bea576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611be1906124d9565b60405180910390fd5b611bfa611bf561186a565b611872565b565b6060611c0b8484600085611c14565b90509392505050565b606082471015611c59576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611c5090612419565b60405180910390fd5b611c6285611b78565b611ca1576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611c98906124b9565b60405180910390fd5b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051611cca919061229d565b60006040518083038185875af1925050503d8060008114611d07576040519150601f19603f3d011682016040523d82523d6000602084013e611d0c565b606091505b5091509150611d1c828286611d28565b92505050949350505050565b60608315611d3857829050611d88565b600083511115611d4b5782518084602001fd5b816040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611d7f91906123b7565b60405180910390fd5b9392505050565b6000611da2611d9d84612579565b612554565b90508083825260208201905082856020860282011115611dc557611dc46128fc565b5b60005b85811015611df55781611ddb8882611dff565b845260208401935060208301925050600181019050611dc8565b5050509392505050565b600081359050611e0e81612c0f565b92915050565b600081519050611e2381612c0f565b92915050565b600082601f830112611e3e57611e3d6128f7565b5b8135611e4e848260208601611d8f565b91505092915050565b600081519050611e6681612c26565b92915050565b600081359050611e7b81612c3d565b92915050565b600081519050611e9081612c3d565b92915050565b600060208284031215611eac57611eab612906565b5b6000611eba84828501611dff565b91505092915050565b600060208284031215611ed957611ed8612906565b5b6000611ee784828501611e14565b91505092915050565b60008060008060808587031215611f0a57611f09612906565b5b6000611f1887828801611dff565b9450506020611f2987828801611dff565b9350506040611f3a87828801611e6c565b9250506060611f4b87828801611e6c565b91505092959194509250565b60008060408385031215611f6e57611f6d612906565b5b6000611f7c85828601611dff565b9250506020611f8d85828601611e6c565b9150509250929050565b600060208284031215611fad57611fac612906565b5b600082013567ffffffffffffffff811115611fcb57611fca612901565b5b611fd784828501611e29565b91505092915050565b600060208284031215611ff657611ff5612906565b5b600061200484828501611e57565b91505092915050565b60006020828403121561202357612022612906565b5b600061203184828501611e6c565b91505092915050565b6000602082840312156120505761204f612906565b5b600061205e84828501611e81565b91505092915050565b612070816126ec565b82525050565b6000612081826125a5565b61208b81856125bb565b935061209b81856020860161278e565b80840191505092915050565b6120b081612734565b82525050565b6120bf81612746565b82525050565b6120ce81612758565b82525050565b60006120df826125b0565b6120e981856125c6565b93506120f981856020860161278e565b6121028161290b565b840191505092915050565b600061211a6026836125c6565b91506121258261291c565b604082019050919050565b600061213d6035836125c6565b91506121488261296b565b604082019050919050565b60006121606026836125c6565b915061216b826129ba565b604082019050919050565b6000612183602c836125c6565b915061218e82612a09565b604082019050919050565b60006121a6602e836125c6565b91506121b182612a58565b604082019050919050565b60006121c96020836125c6565b91506121d482612aa7565b602082019050919050565b60006121ec601d836125c6565b91506121f782612ad0565b602082019050919050565b600061220f601d836125c6565b915061221a82612af9565b602082019050919050565b6000612232602b836125c6565b915061223d82612b22565b604082019050919050565b60006122556031836125c6565b915061226082612b71565b604082019050919050565b6000612278602a836125c6565b915061228382612bc0565b604082019050919050565b6122978161272a565b82525050565b60006122a98284612076565b915081905092915050565b60006020820190506122c96000830184612067565b92915050565b60006060820190506122e46000830186612067565b6122f16020830185612067565b6122fe604083018461228e565b949350505050565b600060408201905061231b6000830185612067565b612328602083018461228e565b9392505050565b60006060820190506123446000830186612067565b612351602083018561228e565b61235e604083018461228e565b949350505050565b600060208201905061237b60008301846120a7565b92915050565b600060208201905061239660008301846120b6565b92915050565b60006020820190506123b160008301846120c5565b92915050565b600060208201905081810360008301526123d181846120d4565b905092915050565b600060208201905081810360008301526123f28161210d565b9050919050565b6000602082019050818103600083015261241281612130565b9050919050565b6000602082019050818103600083015261243281612153565b9050919050565b6000602082019050818103600083015261245281612176565b9050919050565b6000602082019050818103600083015261247281612199565b9050919050565b60006020820190508181036000830152612492816121bc565b9050919050565b600060208201905081810360008301526124b2816121df565b9050919050565b600060208201905081810360008301526124d281612202565b9050919050565b600060208201905081810360008301526124f281612225565b9050919050565b6000602082019050818103600083015261251281612248565b9050919050565b600060208201905081810360008301526125328161226b565b9050919050565b600060208201905061254e600083018461228e565b92915050565b600061255e61256f565b905061256a82826127c1565b919050565b6000604051905090565b600067ffffffffffffffff821115612594576125936128c8565b5b602082029050602081019050919050565b600081519050919050565b600081519050919050565b600081905092915050565b600082825260208201905092915050565b60006125e28261272a565b91506125ed8361272a565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156126225761262161283b565b5b828201905092915050565b60006126388261272a565b91506126438361272a565b9250826126535761265261286a565b5b828204905092915050565b60006126698261272a565b91506126748361272a565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04831182151516156126ad576126ac61283b565b5b828202905092915050565b60006126c38261272a565b91506126ce8361272a565b9250828210156126e1576126e061283b565b5b828203905092915050565b60006126f78261270a565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600061273f8261276a565b9050919050565b60006127518261276a565b9050919050565b60006127638261276a565b9050919050565b60006127758261277c565b9050919050565b60006127878261270a565b9050919050565b60005b838110156127ac578082015181840152602081019050612791565b838111156127bb576000848401525b50505050565b6127ca8261290b565b810181811067ffffffffffffffff821117156127e9576127e86128c8565b5b80604052505050565b60006127fd8261272a565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156128305761282f61283b565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b7f4e6574776f726b4665654d616e616765723a20546f74616c206665652070657260008201527f63656e742067726561746572207468616e203130300000000000000000000000602082015250565b7f416464726573733a20696e73756666696369656e742062616c616e636520666f60008201527f722063616c6c0000000000000000000000000000000000000000000000000000602082015250565b7f4e6574776f726b4665654d616e616765723a2043616c6c6572206973206e6f7460008201527f20746865206e6574776f726b0000000000000000000000000000000000000000602082015250565b7f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160008201527f647920696e697469616c697a6564000000000000000000000000000000000000602082015250565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b7f43616e6e6f74207769746864726177207374616b696e6720746f6b656e000000600082015250565b7f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000600082015250565b7f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960008201527f6e697469616c697a696e67000000000000000000000000000000000000000000602082015250565b7f4e6574776f726b4665654d616e616765723a2043616c6c6572206973206e6f7460008201527f206e6574776f726b206f70657261746f72000000000000000000000000000000602082015250565b7f5361666545524332303a204552433230206f7065726174696f6e20646964206e60008201527f6f74207375636365656400000000000000000000000000000000000000000000602082015250565b612c18816126ec565b8114612c2357600080fd5b50565b612c2f816126fe565b8114612c3a57600080fd5b50565b612c468161272a565b8114612c5157600080fd5b5056fea2646970667358221220111f546d5e28d85b64e7bce994a64266ce9f6d8c3dbcefede4262d4a5e4a080764736f6c63430008070033";

export class NetworkFeeManager__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<NetworkFeeManager> {
    return super.deploy(overrides || {}) as Promise<NetworkFeeManager>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): NetworkFeeManager {
    return super.attach(address) as NetworkFeeManager;
  }
  connect(signer: Signer): NetworkFeeManager__factory {
    return super.connect(signer) as NetworkFeeManager__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): NetworkFeeManagerInterface {
    return new utils.Interface(_abi) as NetworkFeeManagerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): NetworkFeeManager {
    return new Contract(address, _abi, signerOrProvider) as NetworkFeeManager;
  }
}
