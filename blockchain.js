// blockchain.js - Connection code for Anggi
const CONTRACT_ADDRESS = "0xd9145CCE52D386f254917e481eB44e9943F39138";

const CONTRACT_ABI = [
    {
        "inputs": [
            {"internalType": "string", "name": "_newsHash", "type": "string"},
            {"internalType": "string", "name": "_prediction", "type": "string"}
        ],
        "name": "verifyNews",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{"internalType": "uint256", "name": "index", "type": "uint256"}],
        "name": "getVerification",
        "outputs": [
            {"internalType": "string", "name": "", "type": "string"},
            {"internalType": "string", "name": "", "type": "string"},
            {"internalType": "uint256", "name": "", "type": "uint256"},
            {"internalType": "address", "name": "", "type": "address"}
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getTotalVerifications",
        "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
        "stateMutability": "view",
        "type": "function"
    }
];

function generateNewsHash(text) {
    return '0x' + btoa(text).substring(0, 10).replace(/=/g, '');
}

async function verifyOnBlockchain(newsText, prediction) {
    if (typeof window.ethereum === 'undefined') {
        return { success: false, hash: '⚠️ Please install MetaMask' };
    }
    
    try {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);
        const newsHash = generateNewsHash(newsText);
        const tx = await contract.verifyNews(newsHash, prediction);
        const receipt = await tx.wait();
        
        return {
            success: true,
            hash: receipt.transactionHash,
            blockNumber: receipt.blockNumber,
            explorerUrl: `https://sepolia.etherscan.io/tx/${receipt.transactionHash}`
        };
    } catch (error) {
        return { success: false, hash: '❌ Transaction failed: ' + error.message };
    }
}