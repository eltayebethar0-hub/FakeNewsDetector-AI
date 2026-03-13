# Fake News Verification System - Blockchain Component

## 👤 Team Member
**ETHAR** - Blockchain Developer

## 📋 Project Overview
Smart contract for storing news verification results permanently on blockchain.

## 🛠️ Technologies Used
- Solidity ^0.8.19
- Remix IDE
- ethers.js
- MetaMask

## 📁 Files
- `FakeNewsVerification.sol` - Main smart contract
- `blockchain.js` - Connection code for frontend
- `contract-address.txt` - Deployment details

## 📝 Contract Details
**Contract Address:** `0xd9145CCE52D386f254917e481eB44e9943F39138`
**Network:** Remix VM
**Latest Transaction:** `0xb817d25edd9cde5044d2e2ef05913b7c871786fdf363def45b2552929a76980c0`

## ✅ Test Results
| Input | Prediction | Status |
|-------|------------|--------|
| "test123" | REAL | ✓ Verified |
| "aliens landed on earth" | FAKE | ✓ Verified |

## 🔧 Functions
- `verifyNews` - Store verification on blockchain
- `getVerification` - Retrieve verification by index
- `getTotalVerifications` - Get total count

## 🚀 How to Integrate with Frontend
1. Include ethers.js in HTML
2. Add blockchain.js to project
3. Call `verifyOnBlockchain(newsText, prediction)`

## 🤝 Team
- **ANGGI YEAM** - Frontend Developer
- **ETHAR** - Blockchain Developer

## 📅 Submission
March 13, 2026