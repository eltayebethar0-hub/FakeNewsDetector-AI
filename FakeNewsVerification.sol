// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract FakeNewsVerification {
    struct Verification {
        string newsHash;
        string prediction;
        uint256 timestamp;
        address verifier;
    }
    
    Verification[] public verifications;
    mapping(uint => bool) public verified;
    
    function verifyNews(string memory _newsHash, string memory _prediction) public {
        verifications.push(Verification(
            _newsHash,
            _prediction,
            block.timestamp,
            msg.sender
        ));
    }