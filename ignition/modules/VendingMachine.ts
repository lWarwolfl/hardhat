import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const VendingMachineModule = buildModule("VendingMachineModule", (m) => {
  // Deploy the VendingMachine contract
  const vendingMachine = m.contract("VendingMachine", []);

  return { vendingMachine };
});

export default VendingMachineModule;
