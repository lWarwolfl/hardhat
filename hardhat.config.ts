import "@nomicfoundation/hardhat-toolbox";
import { HardhatUserConfig } from "hardhat/config";
require("dotenv").config();

const {
  WALLET_PRIVATE_KEY,
  INFURA_API_KEY,
  ETHERSCAN_API_KEY,
  POLYGONSCAN_API_KEY,
  OKLINK_API_KEY,
} = process.env;

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  networks: {
    sepolia: {
      url: `https://sepolia.infura.io/v3/${INFURA_API_KEY}`,
      accounts: [WALLET_PRIVATE_KEY!],
    },
    polygonAmoy: {
      url: `https://polygon-amoy.infura.io/v3/${INFURA_API_KEY}`,
      accounts: [WALLET_PRIVATE_KEY!],
    },
  },
  etherscan: {
    apiKey: {
      sepolia: ETHERSCAN_API_KEY!,
      polygonAmoy: OKLINK_API_KEY!,
    },
    customChains: [
      {
        network: "polygonAmoy",
        chainId: 80002,
        urls: {
          apiURL:
            "https://www.oklink.com/api/explorer/v1/contract/verify/async/api/polygonAmoy",
          browserURL: "https://www.oklink.com/polygonAmoy",
        },
      },
    ],
  },
};

export default config;

// To deploy the contract: npx hardhat ignition deploy ignition/modules/VendingMachine.ts --network polygonAmoy --verify
