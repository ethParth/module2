import hre from "hardhat";
// const hre = require("hardhat");
import { ethers } from "hardhat";

const CONTRACT_ADDRESS = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";
const recieverAddress = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266";
const amount = 20;
const deployer = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266";

export async function mint() {
  const _contract = await hre.ethers.getContractAt("_ERC20", CONTRACT_ADDRESS);

  const owner = await _contract.owner();

  console.log("Owner: " + owner);

  const mintTX = await _contract.mintTokens(recieverAddress, amount, {
    from: deployer,
  });

  console.log(`The Transaction Hash ${mintTX.hash}`);

  const balanceAfter = await _contract.getBalance(deployer, {
    from: deployer,
  });

  console.log("Balance after mint: " + balanceAfter);
}

mint()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
