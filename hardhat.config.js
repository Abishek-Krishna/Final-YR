// require("@nomicfoundation/hardhat-toolbox");
require('@nomiclabs/hardhat-ethers');
require('@nomiclabs/hardhat-waffle');
require('dotenv').config();

const PRIVATE_KEY = "61a60e0ac6676eca09bde7c75b65ed08e19ee30c9f9e85f79601c1be0a4067e7"

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.7",
  paths: {
    artifacts: './frontend/src/artifacts',
  },
  networks: {
    goerli: {
      url: `https://polygon-amoy.g.alchemy.com/v2/lU0Fn0rhp1t5hBfX_xiJRpWg8qTzutqy`,
      accounts: [PRIVATE_KEY]
    },
    // hardhat: {
    //   // blockGasLimit: 0x1fffffffffffff,
    //   chainId: 31337,
    //   // allowUnlimitedContractSize: true,
    // },
  }
};
