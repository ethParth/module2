// SPDX-License-Identifier: MIT
pragma solidity  ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract _ERC20 is ERC20{

    address public owner;

    modifier onlyOwner(){
        require(msg.sender == owner, "You are not the Owner");
        _;
    }


    constructor(string memory _name, string memory _symbol, address _owner)ERC20(_name, _symbol){

        owner = _owner;

    }

    function mintTokens(address reciever, uint amount)
    public
    onlyOwner() {

        _mint(reciever, amount);
    }

    function transfer(address reciever, uint256 amount)
    public
    virtual 
    override
    returns(bool){

        return super.transfer(reciever, amount);

    }

    function burn(uint256 amount)
    public 
    {
        super._burn(msg.sender, amount);
    }

    function getBalance(address _address)
    public
    view
    returns(uint256){
        return super.balanceOf(_address);
    }

}