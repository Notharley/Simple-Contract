// Add your contract address and ABI here
const contractAddress = '0xE7333540FAF9f3aEd3485b5b96C3468d340012c0';
const contractABI = [
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_value",
                "type": "uint256"
            }
        ],
        "name": "setValue",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getValue",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "incrementValue",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
];

window.onload = async () => {
    // Modern dapp browsers...
    if (window.ethereum) {
        window.web3 = new Web3(ethereum);
        try {
            // Request account access if needed
            await ethereum.enable();
        } catch (error) {
            // User denied account access...
            console.error("User denied account access")
        }
    }
    // Legacy dapp browsers...
    else if (window.web3) {
        window.web3 = new Web3(web3.currentProvider);
    }
    // Non-dapp browsers...
    else {
        console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
    }

    const simpleContract = new web3.eth.Contract(contractABI, contractAddress);

    window.setValue = async () => {
        const accounts = await web3.eth.getAccounts();
        await simpleContract.methods.setValue(10).send({ from: accounts[0] });
        alert("Value set to 10");
    }

    window.getValue = async () => {
        const value = await simpleContract.methods.getValue().call();
        document.getElementById('value').innerText = value;
    }

    window.incrementValue = async () => {
        const accounts = await web3.eth.getAccounts();
        await simpleContract.methods.incrementValue().send({ from: accounts[0] });
        alert("Value incremented");
    }
}
