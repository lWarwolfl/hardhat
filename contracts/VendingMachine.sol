// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

// https://github.com/lWarwolfl

contract VendingMachine {
    address public owner;
    mapping(address => uint) public donutBalances;

    constructor() {
        owner = msg.sender;
        donutBalances[address(this)] = 100;
    }

    function getVendingMachineBalance() public view returns (uint) {
        return donutBalances[address(this)];
    }

    function restock(uint amount) public {
        require(msg.sender == owner, "Only the owner can restock.");
        donutBalances[address(this)] += amount;
    }

    function purchase(uint amount) public payable {
        require(
            msg.value >= amount * 0.02 ether,
            "You must pay at least 0.02 MATIC per donut"
        );
        require(
            donutBalances[address(this)] >= amount,
            "Not enough donuts in stock to complete this purchase"
        );
        donutBalances[address(this)] -= amount;
        donutBalances[msg.sender] += amount;
    }

    function withdraw() public {
        require(msg.sender == owner, "Only the owner can withdraw.");
        payable(owner).transfer(address(this).balance);
    }

    function getBalance() public view returns (uint) {
        return address(this).balance;
    }
}
