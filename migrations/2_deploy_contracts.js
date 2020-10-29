// need to create these migrations files to put the smart contract on the blockchain
// it is like migrating a database, or changing the state from one to another

const Stackcoin = artifacts.require("Stackcoin");

module.exports = function(deployer) {
  deployer.deploy(Stackcoin);
};
