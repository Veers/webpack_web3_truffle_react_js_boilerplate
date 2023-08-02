const MamontCoin = artifacts.require("MamontCoin");

module.exports = function (deployer) {
  deployer.deploy(MamontCoin, 10000);
};
