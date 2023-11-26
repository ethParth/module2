import hre from "hardhat";
import { ethers } from "hardhat";

const CONTRACT_ADDRESS = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512"; // Replace with actual contract address
const receiverAddress = "0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC"; // Replace with actual receiver address
const amount = 5; // Replace with actual amount
const sender = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266"; // Replace with actual sender address

export async function transfer() {
  try {
    const _contract = await hre.ethers.getContractAt(
      "_ERC20",
      CONTRACT_ADDRESS
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
