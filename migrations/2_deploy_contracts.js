var Zydecoin = artifacts.require("./Zydecoin.sol");
var Scratch = artifacts.require("./Scratch.sol");

module.exports = function(deployer) {
    deployer.deploy(Zydecoin).then(function(){
        deployer.deploy(Scratch, Zydecoin.address)});
};
