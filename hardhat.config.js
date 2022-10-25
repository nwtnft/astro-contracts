require("@nomiclabs/hardhat-waffle");
require("hardhat-abi-exporter");
require("dotenv").config();

module.exports = {
  solidity: "0.8.7",
  networks: {
    ethereum: {
      url: "",
      accounts: [process.env.PK || ""],
    },
  },
  abiExporter: {
    path: "./abi",
    runOnCompile: true,
    clear: true,
    flat: true,
    spacing: 2,
  },
};
