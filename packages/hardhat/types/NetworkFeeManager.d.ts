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

interface NetworkFeeManagerInterface extends ethers.utils.Interface {
  functions: {
    "claimAmbassadorFees(address)": FunctionFragment;
    "claimNetworkFees(address)": FunctionFragment;
    "collateralToken()": FunctionFragment;
    "collectFees(address,address,uint256)": FunctionFragment;
    "creditFeeManager()": FunctionFragment;
    "initialize(address,address,uint256,uint256)": FunctionFragment;
    "moveFeesToRewards(address)": FunctionFragment;
    "networkRoles()": FunctionFragment;
    "owner()": FunctionFragment;
    "registerNetwork(address)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "updateAmbassadorFeePercent(uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "claimAmbassadorFees",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "claimNetworkFees",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "collateralToken",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "collectFees",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "creditFeeManager",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [string, string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "moveFeesToRewards",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "networkRoles",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "registerNetwork",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "updateAmbassadorFeePercent",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "claimAmbassadorFees",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "claimNetworkFees",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "collateralToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "collectFees",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "creditFeeManager",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "moveFeesToRewards",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "networkRoles",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "registerNetwork",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateAmbassadorFeePercent",
    data: BytesLike
  ): Result;

  events: {
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export type OwnershipTransferredEvent = TypedEvent<
  [string, string] & { previousOwner: string; newOwner: string }
>;

export class NetworkFeeManager extends BaseContract {
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

  interface: NetworkFeeManagerInterface;

  functions: {
    claimAmbassadorFees(
      _member: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    claimNetworkFees(
      _member: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    collateralToken(overrides?: CallOverrides): Promise<[string]>;

    collectFees(
      _network: string,
      _member: string,
      _transactionValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    creditFeeManager(overrides?: CallOverrides): Promise<[string]>;

    initialize(
      _creditFeeManager: string,
      _networkRoles: string,
      _totalFeePercent: BigNumberish,
      _ambassadorFeePercent: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    moveFeesToRewards(
      _member: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    networkRoles(overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    registerNetwork(
      _network: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updateAmbassadorFeePercent(
      _ambassadorFeePercent: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  claimAmbassadorFees(
    _member: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  claimNetworkFees(
    _member: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  collateralToken(overrides?: CallOverrides): Promise<string>;

  collectFees(
    _network: string,
    _member: string,
    _transactionValue: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  creditFeeManager(overrides?: CallOverrides): Promise<string>;

  initialize(
    _creditFeeManager: string,
    _networkRoles: string,
    _totalFeePercent: BigNumberish,
    _ambassadorFeePercent: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  moveFeesToRewards(
    _member: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  networkRoles(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  registerNetwork(
    _network: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updateAmbassadorFeePercent(
    _ambassadorFeePercent: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    claimAmbassadorFees(
      _member: string,
      overrides?: CallOverrides
    ): Promise<void>;

    claimNetworkFees(_member: string, overrides?: CallOverrides): Promise<void>;

    collateralToken(overrides?: CallOverrides): Promise<string>;

    collectFees(
      _network: string,
      _member: string,
      _transactionValue: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    creditFeeManager(overrides?: CallOverrides): Promise<string>;

    initialize(
      _creditFeeManager: string,
      _networkRoles: string,
      _totalFeePercent: BigNumberish,
      _ambassadorFeePercent: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    moveFeesToRewards(
      _member: string,
      overrides?: CallOverrides
    ): Promise<void>;

    networkRoles(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    registerNetwork(_network: string, overrides?: CallOverrides): Promise<void>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    updateAmbassadorFeePercent(
      _ambassadorFeePercent: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;
  };

  estimateGas: {
    claimAmbassadorFees(
      _member: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    claimNetworkFees(
      _member: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    collateralToken(overrides?: CallOverrides): Promise<BigNumber>;

    collectFees(
      _network: string,
      _member: string,
      _transactionValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    creditFeeManager(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      _creditFeeManager: string,
      _networkRoles: string,
      _totalFeePercent: BigNumberish,
      _ambassadorFeePercent: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    moveFeesToRewards(
      _member: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    networkRoles(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    registerNetwork(
      _network: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updateAmbassadorFeePercent(
      _ambassadorFeePercent: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    claimAmbassadorFees(
      _member: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    claimNetworkFees(
      _member: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    collateralToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    collectFees(
      _network: string,
      _member: string,
      _transactionValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    creditFeeManager(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    initialize(
      _creditFeeManager: string,
      _networkRoles: string,
      _totalFeePercent: BigNumberish,
      _ambassadorFeePercent: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    moveFeesToRewards(
      _member: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    networkRoles(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    registerNetwork(
      _network: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updateAmbassadorFeePercent(
      _ambassadorFeePercent: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}