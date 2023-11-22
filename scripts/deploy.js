const hre = require("hardhat");

async function main() {
  const name = "NEW TOKEN";
  const symbol = "NWT";
  const owner = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266";
  const _ERC20 = await hre.ethers.getContractFactory(
    "ERC20",
    name,
    symbol,
    owner
  );
  const _erc20 = await _ERC20.deploy(initBalance);
  await _erc20.deployed();

  console.log(`ERC20 Contract deployed to ${_erc20.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
