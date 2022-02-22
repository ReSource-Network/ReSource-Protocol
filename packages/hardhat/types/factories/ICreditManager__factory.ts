/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  ICreditManager,
  ICreditManagerInterface,
} from "../ICreditManager";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_networkToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_percent",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "calculatePercentInCollateral",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
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
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "convertNetworkToCollateral",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_counterparty",
        type: "address",
      },
      {
        internalType: "address",
        name: "_pool",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_creditLimit",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_network",
        type: "address",
      },
    ],
    name: "createCreditLine",
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
      {
        internalType: "address",
        name: "_counterparty",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_creditLimit",
        type: "uint256",
      },
    ],
    name: "extendCreditLine",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getCollateralToken",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
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
      {
        internalType: "address",
        name: "_counterparty",
        type: "address",
      },
    ],
    name: "getCreditLine",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "creditPool",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "issueDate",
            type: "uint256",
          },
        ],
        internalType: "struct ICreditManager.CreditLine",
        name: "",
        type: "tuple",
      },
    ],
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
      {
        internalType: "address",
        name: "_counterparty",
        type: "address",
      },
    ],
    name: "getCreditLineUnderwriter",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getMinLTV",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
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
      {
        internalType: "address",
        name: "_counterparty",
        type: "address",
      },
    ],
    name: "getNeededCollateral",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
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
      {
        internalType: "address",
        name: "_counterparty",
        type: "address",
      },
    ],
    name: "isCreditLineExpired",
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
        name: "_network",
        type: "address",
      },
      {
        internalType: "address",
        name: "_counterparty",
        type: "address",
      },
    ],
    name: "isPoolValidLTV",
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
        name: "_network",
        type: "address",
      },
      {
        internalType: "address",
        name: "_counterparty",
        type: "address",
      },
    ],
    name: "renewCreditLine",
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
      {
        internalType: "address",
        name: "_counterparty",
        type: "address",
      },
      {
        internalType: "address",
        name: "_pool",
        type: "address",
      },
    ],
    name: "swapCreditLinePool",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class ICreditManager__factory {
  static readonly abi = _abi;
  static createInterface(): ICreditManagerInterface {
    return new utils.Interface(_abi) as ICreditManagerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ICreditManager {
    return new Contract(address, _abi, signerOrProvider) as ICreditManager;
  }
}