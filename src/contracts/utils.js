import { ethers } from 'ethers';

import BigNumber from 'bignumber.js';
import { useWeb3React } from "@web3-react/core";
import {
  // SUBTRACT_GAS_LIMIT,
  contractAddresses,
} from './lib/constants.js';
import { bnToDec } from './utils';
BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80,
});



export const getAirdropERC20Contract = (bunzz) => {
  return bunzz && bunzz.contracts && bunzz.contracts.airdropERC20;
}


export const setErc20ContractAddress = (bunzz, address) => {
  bunzz.contracts.erc20.options.address = address;
}

export const airdrop = async (airdropERC20Contract, recipients, amounts, account) => {
  return airdropERC20Contract.methods.airdrop(recipients, amounts).send({ from: account })
  .on('transactionHash', (tx) => {
    console.log(tx)
    return tx.transactionHash
  }); 
}

export const connectToOtherContracts = async (airdropERC20Contract, contracts, account) => {
  return airdropERC20Contract.methods.connectToOtherContracts(contracts).send({ from: account})
  .on('transactionHash', (tx) => {
    console.log(tx)
    return tx.transactionHash
  }); 
}
export const retrieveTokens = async (airdropERC20Contract, amount,  account) => {
  return airdropERC20Contract.methods.retrieveTokens(amount).send({ from: account})
  .on('transactionHash', (tx) => {
    console.log(tx)
    return tx.transactionHash
  }); 
}
export const setMaxRecipientCount = async (airdropERC20Contract, maxRecipientCount, account) => {
  return airdropERC20Contract.methods.setMaxRecipientCount(maxRecipientCount).send({ from: account})
  .on('transactionHash', (tx) => {
    console.log(tx)
    return tx.transactionHash
  }); 
}





