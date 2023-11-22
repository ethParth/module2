const hre = require("hardhat");
const ethers = require("ethers");

const CONTRACT_ADDRESS = ""; // Replace with actual contract address
const receiverAddress = ""; // Replace with actual receiver address
const amount = 0; // Replace with actual amount
const sender = ""; // Replace with actual sender address

export async function transfer() {
  try {
    const _contract = await ethers.getContractAt("ERC20", CONTRACT_ADDRESS);

    const owner = await _contract.owner();
    console.log("Owner: " + owner);

    const balanceBefore = await _contract.getBalance();
    console.log("Balance: before transfer " + balanceBefore);

    const transferTX = await _contract.transfer(receiverAddress, amount, {
      from: sender,
    });
    console.log(`The Transaction Hash ${transferTX}`);

    const balanceAfter = await _contract.getBalance();
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
