var PillarTechnologyCoin = artifacts.require("./PillarTechnologyCoin");
var PTCWagers = artifacts.require("./PTCWagers.sol");

module.exports = function(deployer) {
    deployer.deploy(PillarTechnologyCoin);
    deployer.deploy(PTCWagers);
};
