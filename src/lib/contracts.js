export const FACTORY_ADDRESS = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

export const FACTORY_ABI = [
    {
        anonymous: false,
        inputs: [
        {
            indexed: true,
            internalType: "address",
            name: "creator",
            type: "address",
        },
        {
            indexed: false,
            internalType: "address",
            name: "passAddress",
            type: "address",
        },
        ],
        name: "PassCreated",
        type: "event",
    },
    {
        inputs: [
        {
            internalType: "uint256",
            name: "",
            type: "uint256",
        },
        ],
        name: "allPasses",
        outputs: [
        {
            internalType: "address",
            name: "",
            type: "address",
        },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
        {
            internalType: "string",
            name: "name",
            type: "string",
        },
        {
            internalType: "string",
            name: "symbol",
            type: "string",
        },
        {
            internalType: "string",
            name: "baseURI",
            type: "string",
        },
        ],
        name: "createPass",
        outputs: [
        {
            internalType: "address",
            name: "",
            type: "address",
        },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
        {
            internalType: "address",
            name: "",
            type: "address",
        },
        {
            internalType: "uint256",
            name: "",
            type: "uint256",
        },
        ],
        name: "creatorToPasses",
        outputs: [
        {
            internalType: "address",
            name: "",
            type: "address",
        },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
        {
            internalType: "address",
            name: "creator",
            type: "address",
        },
        ],
        name: "getPassesByCreator",
        outputs: [
        {
            internalType: "address[]",
            name: "",
            type: "address[]",
        },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "totalPasses",
        outputs: [
        {
            internalType: "uint256",
            name: "",
            type: "uint256",
        },
        ],
        stateMutability: "view",
        type: "function",
    },
];
