## About
> one line description ← What issue does this module solve?

The Airdrop Simple (ERC20) module provides the functions to airdrop/giveaway tokens to a list of addresses.

## Features

This module have the feature of connecting it to a desired erc20 token that you want to give away, and the mass transfer to tokens as gifts to an list of addresses.

For this particular example, there are no values that the owner needs to setup up during the deployment.

All the detail can be updated by using public function that will be explained in the further section.

## Use case

Module used to create simple airdrops that is commpatible with any ERC20 token, at the begining mint the tokens and send the desired amount to be airdropped to this contract, do not worry if you mistake the amount you can at any time send more or retrieve any amount back,it has an aidrop function that takes as arguments 2 functions, an array of recipients and an array of amounts, it works like a bulk send function, it also implementes a function to retrieve any tokens that have been sent to the contract but have not been airdropped , before doing any actions be sure you connected your contract with a ERC20 token as it will not work without it

## Sample dApp
- github repo URL
    https://github.com/john082Coder/BunzzAuctionERC1155ModuleTest
- simple dapp URL
    https://bunzz-auction-erc-1155-module-test.vercel.app/

---
## Review report
