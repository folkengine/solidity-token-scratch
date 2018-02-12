pragma solidity ^0.4.19;

import 'zeppelin-solidity/contracts/token/ERC20/MintableToken.sol';

contract Zydecoin is MintableToken {
    string public name = "Zydecoin";
    string public symbol = "ZYC";
    uint public decimals = 2;
}
