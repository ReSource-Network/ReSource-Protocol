/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface ICreditRequestInterface extends ethers.utils.Interface {
  functions: {
    "approveRequest(address,address)": FunctionFragment;
    "createRequest(address,address,uint256)": FunctionFragment;
    "deleteRequest(address,address)": FunctionFragment;
    "getCreditRequest(address,address)": FunctionFragment;
    "updateRequestLimit(address,address,uint256,bool)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "approveRequest",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "createRequest",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "deleteRequest",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "getCreditRequest",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "updateRequestLimit",
    values: [string, string, BigNumberish, boolean]
  ): string;

  decodeFunctionResult(
    functionFragment: "approveRequest",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createRequest",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "deleteRequest",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCreditRequest",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateRequestLimit",
    data: BytesLike
  ): Result;

  events: {};
}

export class ICreditRequest extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: ICreditRequestInterface;

  functions: {
    approveRequest(
      _network: string,
      _counterparty: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    createRequest(
      _network: string,
      _counterparty: string,
      _creditLimit: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    deleteRequest(
      _network: string,
      _counterparty: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getCreditRequest(
      _network: string,
      _counterparty: string,
      overrides?: CallOverrides
    ): Promise<
      [
        [boolean, boolean, string, BigNumber] & {
          approved: boolean;
          unstaking: boolean;
          ambassador: string;
          creditLimit: BigNumber;
        }
      ]
    >;

    updateRequestLimit(
      _network: string,
      _counterparty: string,
      _creditLimit: BigNumberish,
      _approved: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  approveRequest(
    _network: string,
    _counterparty: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  createRequest(
    _network: string,
    _counterparty: string,
    _creditLimit: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  deleteRequest(
    _network: string,
    _counterparty: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getCreditRequest(
    _network: string,
    _counterparty: string,
    overrides?: CallOverrides
  ): Promise<
    [boolean, boolean, string, BigNumber] & {
      approved: boolean;
      unstaking: boolean;
      ambassador: string;
      creditLimit: BigNumber;
    }
  >;

  updateRequestLimit(
    _network: string,
    _counterparty: string,
    _creditLimit: BigNumberish,
    _approved: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    approveRequest(
      _network: string,
      _counterparty: string,
      overrides?: CallOverrides
    ): Promise<void>;

    createRequest(
      _network: string,
      _counterparty: string,
      _creditLimit: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    deleteRequest(
      _network: string,
      _counterparty: string,
      overrides?: CallOverrides
    ): Promise<void>;

    getCreditRequest(
      _network: string,
      _counterparty: string,
      overrides?: CallOverrides
    ): Promise<
      [boolean, boolean, string, BigNumber] & {
        approved: boolean;
        unstaking: boolean;
        ambassador: string;
        creditLimit: BigNumber;
      }
    >;

    updateRequestLimit(
      _network: string,
      _counterparty: string,
      _creditLimit: BigNumberish,
      _approved: boolean,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    approveRequest(
      _network: string,
      _counterparty: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    createRequest(
      _network: string,
      _counterparty: string,
      _creditLimit: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    deleteRequest(
      _network: string,
      _counterparty: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getCreditRequest(
      _network: string,
      _counterparty: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    updateRequestLimit(
      _network: string,
      _counterparty: string,
      _creditLimit: BigNumberish,
      _approved: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    approveRequest(
      _network: string,
      _counterparty: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    createRequest(
      _network: string,
      _counterparty: string,
      _creditLimit: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    deleteRequest(
      _network: string,
      _counterparty: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getCreditRequest(
      _network: string,
      _counterparty: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    updateRequestLimit(
      _network: string,
      _counterparty: string,
      _creditLimit: BigNumberish,
      _approved: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}