import { ethers, network } from "hardhat";

const b_address = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";
const amount = 20;
const deployer = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266";

export async function rateOwnerChange() {
  console.log(`Rate at ${b_address}`);

  const _contract = await ethers.getContractAt("_ERC20", b_address);

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
