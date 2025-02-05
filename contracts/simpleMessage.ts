export const contract = {
    address: "0x10893F9D8eCb09746C3DC7a6dBa9005a062B40Df",
    abi: [
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "initialMessage",
                    "type": "string"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "string",
                    "name": "newMessage",
                    "type": "string"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "changedBy",
                    "type": "address"
                }
            ],
            "name": "MessageChanged",
            "type": "event"
        },
        {
            "inputs": [],
            "name": "getMessage",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "message",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "owner",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "_message",
                    "type": "string"
                }
            ],
            "name": "setMessage",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "newOwner",
                    "type": "address"
                }
            ],
            "name": "transferOwnership",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        }
    ]
} as const