import { ethers } from "hardhat";

async function main() {
  const name = "NEW TOKEN";
  const symbol = "NWT";
  const owner = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266";

  const ERC20 = await ethers.deployContract("_ERC20", [name, symbol, owner]);

  await ERC20.waitForDeployment();

  console.log(`ERC20 deployed to ${ERC20.target}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
