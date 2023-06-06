# WRITE(main)

## transferOwnerShip
This function will be called by the owner if he wants to transfer the ownership of the contract to another address

|Name|Type|Description|Example|Default|
|--- |---|---|---|---|
|newOwner|address|The address that will become the new owner of the contract.||N/A|

## renounceOwnership
This function will be called by the owner if he wants to drop the ownership of the contract

No arguments

## retrieveTokens
Transfer back the amount of tokens that have not been airdropped or the owner simply wants backr

|Name|Type|Description|Example|Default|
|--- |---|---|---|---|
|amount|uint256|The amount the owner wish to retireve back from the airdrop contract.||N/A|

## airdrop
Airdrop tokens to the recipients, can only be called by the owner

|Name|Type|Description|Example|Default|
|--- |---|---|---|---|
|recipients|address[]|The array should represent the addresses that will get tokens in this airdrop||N/A|
|amounts|uint256[]|The array should represents that amounts that will be airdropped to each recipient individually.||N/A|

## connectToOtherContracts
Call this function to connect a token to your contract, it should be the first thing to do to setup the contract

|Name|Type|Description|Example|Default|
|--- |---|---|---|---|
|_contracts|address[]|The array should only contain one item, and that item should be the address of the token you wish to airdrop||N/A|


## setMaxRecipientCount
Set the max value of recipient count

|Name|Type|Description|Example|Default|
|--- |---|---|---|---|
|_maxRecipientCount|uint256|The new value of max recipient count||N/A|


# READ(main)

## owner
Owner of the contract

No arguments

## token
Returns the address of the token that is connected with this contract

No arguments

## maxRecipientCount
Returns the max value of recipient count

No arguments