require('babel-register');
require('babel-polyfill');

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
  },
  contracts_directory: './contracts/',
  contracts_build_directory: './src/abis/',
  compilers: {
    solc: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
}


/* Look up the https://www.trufflesuite.com/docs/truffle/reference/configuration
  for more information about connecting off of development into a test like ropsten
  and other networks.
*/

/*
** PROJECT BUILD ARTIFACTS DO NOT NEED TO BE IN PROJECT ROOT FOLDER
module.exports = {
  -------------------------------------------------------------------
  contracts_directory: "./allMyStuff/someStuff/theContractFolder",
  contracts_build_directory: "../../../output",
  migrations_directory: "./allMyStuff/someStuff/theMigrationsFolder",
  -------------------------------------------------------------------
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*",
    }
  }
};












*/
