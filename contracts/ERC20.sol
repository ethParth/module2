// SPDX-License-Identifier: MIT
pragma solidity  ^0.8.9;

contract ERC20{

    address public owner;
    string public name;
    string public symbol;

    modifier onlyOwner(){
        require(msg.sender == owner, "You are not the Owner");
        _;
    }

    mapping (address => uint) public balances;
    uint256 public totalSupply;


    constructor(string memory _name, string memory _symbol, address _owner){

        name = _name;
        symbol = _symbol;
        owner = _owner;

    }

    function mint(address reciever, uint amount)
    public
    onlyOwner() {

        balances[reciever] += amount;
        totalSupply += amount;

    }

    function burn(uint256 amount)
    public{

        require(balances[msg.sender] >= amount , "You don't have enough tokens to burn");
        balances[msg.sender] -= amount;
        totalSupply -= amount;

    }

    function transfer(address reciever, uint256 amount)
    public{

        require(balances[msg.sender] >= amount , "You don't have enough tokens to transfer");
        balances[msg.sender] -= amount;
        balances[reciever] += amount;

    }

    function getBalance(address _address)
    public
    view
    returns(uint256){
        return balances[_address];
    }

}