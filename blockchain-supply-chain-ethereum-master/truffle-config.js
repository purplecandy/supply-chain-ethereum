const HDWalletProvider = require('truffle-hdwallet-provider');
const infuraKey = "4654f93611b549e2afe30181a4bfc0ac";
mnemonic= "sunny soon double brown rebuild trophy capable catch mosquito carpet autumn include"
module.exports = {
  compilers: {
    solc: {
      version: "^0.4.24"
    }
  },
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
    rinkeby: {
      provider: () => new HDWalletProvider(mnemonic, `https://rinkeby.infura.io/v3/${infuraKey}`),
        network_id: 4,       // rinkeby's id
        gas: 0        // rinkeby has a lower block limit than mainnet
        
    }
  }
};