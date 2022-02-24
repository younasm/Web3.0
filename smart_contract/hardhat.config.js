require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/HFmx4krFDv7Xz8bm3YuuyrQnZWfsbjFq',
      accounts: ['32fba5d58244261a67334258bc0650c45599c71e85c12c0668127ea3417c38f5'],
    },
  },
};