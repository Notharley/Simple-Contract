# Simple Contract With 2-3 functions

This project demonstrates the basic interaction between an Ethereum smart contract and a web frontend. The smart contract allows users to set, get, and increment a stored value on the blockchain. The web frontend, built with HTML and JavaScript, uses the web3.js library to facilitate communication with the smart contract, allowing users to interact with it directly from their browser.


## Description

This project demonstrates a basic Ethereum smart contract and a web frontend for interacting with it. The smart contract allows users to set, get, and increment a value stored on the blockchain. The frontend is built using HTML and JavaScript, leveraging web3.js to communicate with the smart contract.
## Getting Started

## Installing

Node.js and npm: Ensure you have Node.js and npm installed on your machine. You can download them from Node.js official website.

MetaMask: Install MetaMask or any other Ethereum wallet browser extension.

Ethereum Development Environment: You can use Remix, Truffle, or Hardhat for deploying the smart contract. This guide uses Remix.

### Executing program

1.Deploy the Smart Contract:

Go to Remix.

Create a new file, e.g., SimpleContract.sol, and paste the following contract code:

    // SPDX-License-Identifier: MIT
    pragma solidity ^0.8.0;

    contract SimpleContract {
    uint256 private value;

    // Function to set a value
    function setValue(uint256 _value) public {
        value = _value;
    }

    // Function to get the current value
    function getValue() public view returns (uint256) {
        return value;
    }

    // Function to increment the value by 1
    function incrementValue() public {
        value += 1;
     }
    }

Compile the contract.

Deploy the contract using the "Deploy & run transactions" tab.

Copy the deployed contract address.    

2.Update the Frontend:

Open app.js and update the contractAddress variable with the deployed contract address.

            const contractAddress = 'YOUR_CONTRACT_ADDRESS';

3.Run the Frontend:

Open the index.html file in a browser.

Connect your MetaMask wallet to the browser.

Interact with the smart contract using the buttons on the webpage.            

## Help

For more information and help, you can refer to the following resources:

Solidity Documentation
Web3.js Documentation
Remix IDE Documentation
MetaMask Documentation

## Authors

Divij Shukla
divij.shukla2003@gmail.com


## License

This project is licensed under the MIT License - see the LICENSE.md file for details
