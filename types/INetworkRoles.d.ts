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

interface INetworkRolesInterface extends ethers.utils.Interface {
  functions: {
    "grantMember(address)": FunctionFragment;
    "isMember(address)": FunctionFragment;
    "isNetworkOperator(address)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "grantMember", values: [string]): string;
  encodeFunctionData(functionFragment: "isMember", values: [string]): string;
  encodeFunctionData(
    functionFragment: "isNetworkOperator",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "grantMember",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isMember", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isNetworkOperator",
    data: BytesLike
  ): Result;

  events: {
    "MemberAdded(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "MemberAdded"): EventFragment;
}

export type MemberAddedEvent = TypedEvent<[string] & { member: string }>;

export class INetworkRoles extends BaseContract {
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

  interface: INetworkRolesInterface;

  functions: {
    grantMember(
      _member: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    isMember(_member: string, overrides?: CallOverrides): Promise<[boolean]>;

    isNetworkOperator(
      _operator: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;
  };

  grantMember(
    _member: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  isMember(_member: string, overrides?: CallOverrides): Promise<boolean>;

  isNetworkOperator(
    _operator: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    grantMember(_member: string, overrides?: CallOverrides): Promise<void>;

    isMember(_member: string, overrides?: CallOverrides): Promise<boolean>;

    isNetworkOperator(
      _operator: string,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {
    "MemberAdded(address)"(
      member?: null
    ): TypedEventFilter<[string], { member: string }>;

    MemberAdded(member?: null): TypedEventFilter<[string], { member: string }>;
  };

  estimateGas: {
    grantMember(
      _member: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    isMember(_member: string, overrides?: CallOverrides): Promise<BigNumber>;

    isNetworkOperator(
      _operator: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    grantMember(
      _member: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    isMember(
      _member: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isNetworkOperator(
      _operator: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
