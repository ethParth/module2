import hre from "hardhat";
import { ethers } from "hardhat";
import { DEPLOYER, CONTRACT_ADDRESS, RECEIVER } from "../helper";

const _CONTRACT_ADDRESS = CONTRACT_ADDRESS; // Replace with actual contract address
const receiverAddress = RECEIVER; // Replace with actual receiver address
const amount = 5; // Replace with actual amount
const sender = DEPLOYER; // Replace with actual sender address

export async function transfer() {
  try {
    const _contract = await hre.ethers.getContractAt(
      "_ERC20",
      _CONTRACT_ADDRESS
    );

    const owner = await _contract.owner();
    console.log("Owner: " + owner);

    const balanceBefore = await _contract.getBalance(sender);
    console.log("Balance: before transfer " + balanceBefore);

    const transferTX = await _contract.transfer(receiverAddress, amount, {
      from: sender,
    });
    console.log(`The Transaction Hash ${transferTX.hash}`);

    const balanceAfter = await _contract.getBalance(sender);
    console.log("Balance: after transfer " + balanceAfter);
  } catch (error) {
    console.error("Error during transfer:", error);
    process.exit(1);
  }
}

transfer()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error("Unhandled promise rejection:", error);
    process.exit(1);
  });
