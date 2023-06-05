## Preparation before deployment
1. You have to prepare any ERC20 token for airdrop.
2. Prepare your list of addresses that you want to give tokens to.

## Get started(Operation)
1. Call the function “connectToOtherContracts” to set up the details explained in the table from above, the function takes only one argument that represents an array of addresses, the first item from the array represent the token that will be airdropped.
2. Send the total amount of tokens you want to airdrop to the contract.
3. To airdrop the tokens, the owner needs to call the function “airdrop”, the function takes two arguments, the first argument represents an array of addresses that will represent users that receive tokens, and the second argument represents an array of uint256 that represents the amount that each address will receive.
4. To retireve back any tokens from the contract in case you sent a wrong amount, the owner can call the function “retrieveTokens”, this function takes only 1 argument that is called 'amount' and it represent the amount of tokens you want to receive back from the contract.






