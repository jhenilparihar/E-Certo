const Ecertify = artifacts.require("Ecertify");

module.exports = async function(deployer) {
  await deployer.deploy(Ecertify);
};
