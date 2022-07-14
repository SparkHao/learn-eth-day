require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks: {
    ganache: {
      url: "HTTP://127.0.0.1:8545",
      accounts: ["0727b6317e9e37bc4bba0a2ad7ca038c951717895e44b18c61293f7ee78d1e57"]
    }
  }
};
