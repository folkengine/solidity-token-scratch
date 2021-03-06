pragma solidity ^0.4.0;

contract Zydecoin {
    function balanceOf(address who) public view returns (uint256);
}

contract Scratch {

    address public creator;
    Zydecoin public zydecoin;

    function Scratch(address _coinAddress) public {
        creator = msg.sender;
        zydecoin = Zydecoin(_coinAddress);
    }

    function pledge(uint256 _amount) public view returns (bool) {
        require(zydecoin.balanceOf(msg.sender) <= _amount);
        return true;
    }

}
