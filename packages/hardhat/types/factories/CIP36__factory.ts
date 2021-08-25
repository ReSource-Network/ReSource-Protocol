/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { CIP36, CIP36Interface } from "../CIP36";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
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
        name: "limit",
        type: "uint256",
      },
    ],
    name: "CreditLimitUpdate",
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
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burnFrom",
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
    ],
    name: "creditBalanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_member",
        type: "address",
      },
    ],
    name: "creditLimitLeftOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_member",
        type: "address",
      },
    ],
    name: "creditLimitOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "name_",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol_",
        type: "string",
      },
      {
        internalType: "address",
        name: "_underwriteManagerAddress",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
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
        name: "_member",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_limit",
        type: "uint256",
      },
    ],
    name: "setCreditLimit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
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
    inputs: [],
    name: "underwriteManagerAddress",
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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50613285806100206000396000f3fe608060405234801561001057600080fd5b50600436106101425760003560e01c806370a08231116100b85780639469ea391161007c5780639469ea391461037757806395d89b41146103a7578063a457c2d7146103c5578063a9059cbb146103f5578063dd62ed3e14610425578063f2fde38b1461045557610142565b806370a08231146102e5578063715018a61461031557806379cc67901461031f578063812aa1dc1461033b5780638da5cb5b1461035957610142565b8063313ce5671161010a578063313ce567146101ff57806332a922291461021d578063395093511461024d57806342966c681461027d57806349d5034d146102995780634a9a75aa146102b557610142565b806306fdde0314610147578063077f224a14610165578063095ea7b31461018157806318160ddd146101b157806323b872dd146101cf575b600080fd5b61014f610471565b60405161015c9190612830565b60405180910390f35b61017f600480360381019061017a9190612451565b610503565b005b61019b60048036038101906101969190612411565b610632565b6040516101a89190612815565b60405180910390f35b6101b9610650565b6040516101c69190612a72565b60405180910390f35b6101e960048036038101906101e491906123be565b61065a565b6040516101f69190612815565b60405180910390f35b610207610752565b6040516102149190612a8d565b60405180910390f35b61023760048036038101906102329190612351565b61075b565b6040516102449190612a72565b60405180910390f35b61026760048036038101906102629190612411565b6107d5565b6040516102749190612815565b60405180910390f35b610297600480360381019061029291906124dc565b610881565b005b6102b360048036038101906102ae9190612411565b610895565b005b6102cf60048036038101906102ca9190612351565b610a20565b6040516102dc9190612a72565b60405180910390f35b6102ff60048036038101906102fa9190612351565b610a9a565b60405161030c9190612a72565b60405180910390f35b61031d610ae3565b005b61033960048036038101906103349190612411565b610b6b565b005b610343610be6565b60405161035091906127d1565b60405180910390f35b610361610c0c565b60405161036e91906127d1565b60405180910390f35b610391600480360381019061038c9190612351565b610c36565b60405161039e9190612a72565b60405180910390f35b6103af610d85565b6040516103bc9190612830565b60405180910390f35b6103df60048036038101906103da9190612411565b610e17565b6040516103ec9190612815565b60405180910390f35b61040f600480360381019061040a9190612411565b610f02565b60405161041c9190612815565b60405180910390f35b61043f600480360381019061043a919061237e565b610f20565b60405161044c9190612a72565b60405180910390f35b61046f600480360381019061046a9190612351565b610fa7565b005b60606068805461048090612c8b565b80601f01602080910402602001604051908101604052809291908181526020018280546104ac90612c8b565b80156104f95780601f106104ce576101008083540402835291602001916104f9565b820191906000526020600020905b8154815290600101906020018083116104dc57829003601f168201915b5050505050905090565b600060019054906101000a900460ff1680610529575060008054906101000a900460ff16155b610568576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161055f90612932565b60405180910390fd5b60008060019054906101000a900460ff1615905080156105b8576001600060016101000a81548160ff02191690831515021790555060016000806101000a81548160ff0219169083151502179055505b6105c2848461109f565b6105ca61118c565b8160ca60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550801561062c5760008060016101000a81548160ff0219169083151502179055505b50505050565b600061064661063f611275565b848461127d565b6001905092915050565b6000606754905090565b6000610667848484611448565b6000606660008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006106b2611275565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905082811015610732576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161072990612972565b60405180910390fd5b6107468561073e611275565b85840361127d565b60019150509392505050565b60006006905090565b600060c960008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160009054906101000a90046fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff169050919050565b60006108776107e2611275565b8484606660006107f0611275565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546108729190612b1a565b61127d565b6001905092915050565b61089261088c611275565b8261146c565b50565b60ca60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16148061092357506108f4610c0c565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b610962576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610959906128d2565b60405180910390fd5b61096b81611645565b60c960008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160106101000a8154816fffffffffffffffffffffffffffffffff02191690836fffffffffffffffffffffffffffffffff1602179055507fe136e6d0a27c5f8661a7aed0168b607aa2edeb7d0e0a588be613ae5b5ad2db2c8282604051610a149291906127ec565b60405180910390a15050565b600060c960008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160109054906101000a90046fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff169050919050565b6000606560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b610aeb611275565b73ffffffffffffffffffffffffffffffffffffffff16610b09610c0c565b73ffffffffffffffffffffffffffffffffffffffff1614610b5f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b5690612992565b60405180910390fd5b610b6960006116a1565b565b6000610b7e83610b79611275565b610f20565b905081811015610bc3576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bba906129b2565b60405180910390fd5b610bd783610bcf611275565b84840361127d565b610be1838361146c565b505050565b60ca60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000603360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60008060c960008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206040518060400160405290816000820160009054906101000a90046fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff1681526020016000820160109054906101000a90046fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff1681525050905080602001516fffffffffffffffffffffffffffffffff1681600001516fffffffffffffffffffffffffffffffff1610610d56576000915050610d80565b80600001518160200151610d6a9190612b70565b6fffffffffffffffffffffffffffffffff169150505b919050565b606060698054610d9490612c8b565b80601f0160208091040260200160405190810160405280929190818152602001828054610dc090612c8b565b8015610e0d5780601f10610de257610100808354040283529160200191610e0d565b820191906000526020600020905b815481529060010190602001808311610df057829003601f168201915b5050505050905090565b60008060666000610e26611275565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905082811015610ee3576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610eda90612a32565b60405180910390fd5b610ef7610eee611275565b8585840361127d565b600191505092915050565b6000610f16610f0f611275565b8484611448565b6001905092915050565b6000606660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b610faf611275565b73ffffffffffffffffffffffffffffffffffffffff16610fcd610c0c565b73ffffffffffffffffffffffffffffffffffffffff1614611023576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161101a90612992565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415611093576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161108a90612892565b60405180910390fd5b61109c816116a1565b50565b600060019054906101000a900460ff16806110c5575060008054906101000a900460ff16155b611104576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110fb90612932565b60405180910390fd5b60008060019054906101000a900460ff161590508015611154576001600060016101000a81548160ff02191690831515021790555060016000806101000a81548160ff0219169083151502179055505b61115c611767565b6111668383611840565b80156111875760008060016101000a81548160ff0219169083151502179055505b505050565b600060019054906101000a900460ff16806111b2575060008054906101000a900460ff16155b6111f1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111e890612932565b60405180910390fd5b60008060019054906101000a900460ff161590508015611241576001600060016101000a81548160ff02191690831515021790555060016000806101000a81548160ff0219169083151502179055505b611249611767565b611251611949565b80156112725760008060016101000a81548160ff0219169083151502179055505b50565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156112ed576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112e490612a12565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561135d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611354906128b2565b60405180910390fd5b80606660008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9258360405161143b9190612a72565b60405180910390a3505050565b6114528382611a32565b61145d838383611c43565b6114678282611ec7565b505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156114dc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016114d3906129d2565b60405180910390fd5b6114e882600083612090565b6000606560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490508181101561156f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161156690612872565b60405180910390fd5b818103606560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555081606760008282546115c79190612ba4565b92505081905550600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405161162c9190612a72565b60405180910390a361164083600084612095565b505050565b60006fffffffffffffffffffffffffffffffff8210611699576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161169090612952565b60405180910390fd5b819050919050565b6000603360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081603360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600060019054906101000a900460ff168061178d575060008054906101000a900460ff16155b6117cc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016117c390612932565b60405180910390fd5b60008060019054906101000a900460ff16159050801561181c576001600060016101000a81548160ff02191690831515021790555060016000806101000a81548160ff0219169083151502179055505b801561183d5760008060016101000a81548160ff0219169083151502179055505b50565b600060019054906101000a900460ff1680611866575060008054906101000a900460ff16155b6118a5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161189c90612932565b60405180910390fd5b60008060019054906101000a900460ff1615905080156118f5576001600060016101000a81548160ff02191690831515021790555060016000806101000a81548160ff0219169083151502179055505b826068908051906020019061190b929190612214565b508160699080519060200190611922929190612214565b5080156119445760008060016101000a81548160ff0219169083151502179055505b505050565b600060019054906101000a900460ff168061196f575060008054906101000a900460ff16155b6119ae576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016119a590612932565b60405180910390fd5b60008060019054906101000a900460ff1615905080156119fe576001600060016101000a81548160ff02191690831515021790555060016000806101000a81548160ff0219169083151502179055505b611a0e611a09611275565b6116a1565b8015611a2f5760008060016101000a81548160ff0219169083151502179055505b50565b6000611a3d83610a9a565b9050818110611a4c5750611c3f565b600060c960008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206040518060400160405290816000820160009054906101000a90046fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff1681526020016000820160109054906101000a90046fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff1681525050905060008284611b3c9190612ba4565b90506000611b4986610c36565b905081811015611b8e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611b8590612912565b60405180910390fd5b611bb88284600001516fffffffffffffffffffffffffffffffff16611bb39190612b1a565b611645565b60c960008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160006101000a8154816fffffffffffffffffffffffffffffffff02191690836fffffffffffffffffffffffffffffffff160217905550611c3a868361209a565b505050505b5050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415611cb3576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611caa906129f2565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611d23576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611d1a90612852565b60405180910390fd5b611d2e838383612090565b6000606560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015611db5576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611dac906128f2565b60405180910390fd5b818103606560008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555081606560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254611e4a9190612b1a565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051611eae9190612a72565b60405180910390a3611ec1848484612095565b50505050565b600060c960008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206040518060400160405290816000820160009054906101000a90046fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff1681526020016000820160109054906101000a90046fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff168152505090506000611fcb82600001516fffffffffffffffffffffffffffffffff16846121fb565b90506000811415611fdd57505061208c565b6120078183600001516fffffffffffffffffffffffffffffffff166120029190612ba4565b611645565b60c960008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160006101000a8154816fffffffffffffffffffffffffffffffff02191690836fffffffffffffffffffffffffffffffff160217905550612089848261146c565b50505b5050565b505050565b505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561210a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161210190612a52565b60405180910390fd5b61211660008383612090565b80606760008282546121289190612b1a565b9250508190555080606560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461217e9190612b1a565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040516121e39190612a72565b60405180910390a36121f760008383612095565b5050565b600081831061220a578161220c565b825b905092915050565b82805461222090612c8b565b90600052602060002090601f0160209004810192826122425760008555612289565b82601f1061225b57805160ff1916838001178555612289565b82800160010185558215612289579182015b8281111561228857825182559160200191906001019061226d565b5b509050612296919061229a565b5090565b5b808211156122b357600081600090555060010161229b565b5090565b60006122ca6122c584612acd565b612aa8565b9050828152602081018484840111156122e6576122e5612d80565b5b6122f1848285612c49565b509392505050565b60008135905061230881613221565b92915050565b600082601f83011261232357612322612d7b565b5b81356123338482602086016122b7565b91505092915050565b60008135905061234b81613238565b92915050565b60006020828403121561236757612366612d8a565b5b6000612375848285016122f9565b91505092915050565b6000806040838503121561239557612394612d8a565b5b60006123a3858286016122f9565b92505060206123b4858286016122f9565b9150509250929050565b6000806000606084860312156123d7576123d6612d8a565b5b60006123e5868287016122f9565b93505060206123f6868287016122f9565b92505060406124078682870161233c565b9150509250925092565b6000806040838503121561242857612427612d8a565b5b6000612436858286016122f9565b92505060206124478582860161233c565b9150509250929050565b60008060006060848603121561246a57612469612d8a565b5b600084013567ffffffffffffffff81111561248857612487612d85565b5b6124948682870161230e565b935050602084013567ffffffffffffffff8111156124b5576124b4612d85565b5b6124c18682870161230e565b92505060406124d2868287016122f9565b9150509250925092565b6000602082840312156124f2576124f1612d8a565b5b60006125008482850161233c565b91505092915050565b61251281612bd8565b82525050565b61252181612bea565b82525050565b600061253282612afe565b61253c8185612b09565b935061254c818560208601612c58565b61255581612d8f565b840191505092915050565b600061256d602383612b09565b915061257882612da0565b604082019050919050565b6000612590602283612b09565b915061259b82612def565b604082019050919050565b60006125b3602683612b09565b91506125be82612e3e565b604082019050919050565b60006125d6602283612b09565b91506125e182612e8d565b604082019050919050565b60006125f9601b83612b09565b915061260482612edc565b602082019050919050565b600061261c602683612b09565b915061262782612f05565b604082019050919050565b600061263f601383612b09565b915061264a82612f54565b602082019050919050565b6000612662602e83612b09565b915061266d82612f7d565b604082019050919050565b6000612685600f83612b09565b915061269082612fcc565b602082019050919050565b60006126a8602883612b09565b91506126b382612ff5565b604082019050919050565b60006126cb602083612b09565b91506126d682613044565b602082019050919050565b60006126ee602483612b09565b91506126f98261306d565b604082019050919050565b6000612711602183612b09565b915061271c826130bc565b604082019050919050565b6000612734602583612b09565b915061273f8261310b565b604082019050919050565b6000612757602483612b09565b91506127628261315a565b604082019050919050565b600061277a602583612b09565b9150612785826131a9565b604082019050919050565b600061279d601f83612b09565b91506127a8826131f8565b602082019050919050565b6127bc81612c32565b82525050565b6127cb81612c3c565b82525050565b60006020820190506127e66000830184612509565b92915050565b60006040820190506128016000830185612509565b61280e60208301846127b3565b9392505050565b600060208201905061282a6000830184612518565b92915050565b6000602082019050818103600083015261284a8184612527565b905092915050565b6000602082019050818103600083015261286b81612560565b9050919050565b6000602082019050818103600083015261288b81612583565b9050919050565b600060208201905081810360008301526128ab816125a6565b9050919050565b600060208201905081810360008301526128cb816125c9565b9050919050565b600060208201905081810360008301526128eb816125ec565b9050919050565b6000602082019050818103600083015261290b8161260f565b9050919050565b6000602082019050818103600083015261292b81612632565b9050919050565b6000602082019050818103600083015261294b81612655565b9050919050565b6000602082019050818103600083015261296b81612678565b9050919050565b6000602082019050818103600083015261298b8161269b565b9050919050565b600060208201905081810360008301526129ab816126be565b9050919050565b600060208201905081810360008301526129cb816126e1565b9050919050565b600060208201905081810360008301526129eb81612704565b9050919050565b60006020820190508181036000830152612a0b81612727565b9050919050565b60006020820190508181036000830152612a2b8161274a565b9050919050565b60006020820190508181036000830152612a4b8161276d565b9050919050565b60006020820190508181036000830152612a6b81612790565b9050919050565b6000602082019050612a8760008301846127b3565b92915050565b6000602082019050612aa260008301846127c2565b92915050565b6000612ab2612ac3565b9050612abe8282612cbd565b919050565b6000604051905090565b600067ffffffffffffffff821115612ae857612ae7612d4c565b5b612af182612d8f565b9050602081019050919050565b600081519050919050565b600082825260208201905092915050565b6000612b2582612c32565b9150612b3083612c32565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115612b6557612b64612cee565b5b828201905092915050565b6000612b7b82612bf6565b9150612b8683612bf6565b925082821015612b9957612b98612cee565b5b828203905092915050565b6000612baf82612c32565b9150612bba83612c32565b925082821015612bcd57612bcc612cee565b5b828203905092915050565b6000612be382612c12565b9050919050565b60008115159050919050565b60006fffffffffffffffffffffffffffffffff82169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b82818337600083830152505050565b60005b83811015612c76578082015181840152602081019050612c5b565b83811115612c85576000848401525b50505050565b60006002820490506001821680612ca357607f821691505b60208210811415612cb757612cb6612d1d565b5b50919050565b612cc682612d8f565b810181811067ffffffffffffffff82111715612ce557612ce4612d4c565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a206275726e20616d6f756e7420657863656564732062616c616e60008201527f6365000000000000000000000000000000000000000000000000000000000000602082015250565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b7f696e76616c696420756e64657277726974657220616464726573730000000000600082015250565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b7f496e73756666696369656e742063726564697400000000000000000000000000600082015250565b7f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160008201527f647920696e697469616c697a6564000000000000000000000000000000000000602082015250565b7f75696e313238206f766572666c6f770000000000000000000000000000000000600082015250565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206160008201527f6c6c6f77616e6365000000000000000000000000000000000000000000000000602082015250565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b7f45524332303a206275726e20616d6f756e74206578636565647320616c6c6f7760008201527f616e636500000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a206275726e2066726f6d20746865207a65726f2061646472657360008201527f7300000000000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b61322a81612bd8565b811461323557600080fd5b50565b61324181612c32565b811461324c57600080fd5b5056fea26469706673582212208e20118cd69a5a321d29205fcf34b221f7803e81ebd8bd9a0464763a473a1c5164736f6c63430008070033";

export class CIP36__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<CIP36> {
    return super.deploy(overrides || {}) as Promise<CIP36>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): CIP36 {
    return super.attach(address) as CIP36;
  }
  connect(signer: Signer): CIP36__factory {
    return super.connect(signer) as CIP36__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CIP36Interface {
    return new utils.Interface(_abi) as CIP36Interface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): CIP36 {
    return new Contract(address, _abi, signerOrProvider) as CIP36;
  }
}
