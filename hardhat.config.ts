import "@nomicfoundation/hardhat-toolbox";
import { HardhatUserConfig } from "hardhat/config";

const INFURA_API_KEY = "212d1693254640c2a54709133b3dc68a";

const WALLET_PRIVATE_KEY =
  "2d1f6571c36f3fdd84d9683618c26d9df81010b18c9a2afb6e1be81723dec3d3";

const ETHERSCAN_API_KEY = "H99N67S85VN8AKMD38AWF4QGKPT9YD1EBJ";

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  networks: {
    sepolia: {
      url: `https://sepolia.infura.io/v3/${INFURA_API_KEY}`,
      accounts: [WALLET_PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: {
      sepolia: ETHERSCAN_API_KEY,
    },
  },
};

export default config;
