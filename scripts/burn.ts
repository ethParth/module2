import { ethers, network } from "hardhat";

const b_address = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
const amount = 5;
const deployer = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266";

export async function rateOwnerChange() {
  console.log(`Rate at ${b_address}`);

  const _contract = await ethers.getContractAt("ERC20", b_address);

  const balanceBefore = await _contract.getBalance(deployer, {
    from: deployer,
  });

  console.log("Balance: before transfer " + balanceBefore);

  console.log(`prev owner = ${await _contract.owner()}`);

  const transferTx = await _contract.burn(amount, {
    from: deployer,
  });

  const balanceAfter = await _contract.getBalance(deployer, {
    from: deployer,
  });

  console.log("Balance: after transfer " + balanceAfter);
}

rateOwnerChange()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
