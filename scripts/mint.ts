const hre = require("hardhat");
const ethers = require("ethers");

const CONTRACT_ADDRESS = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
const recieverAddress = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266";
const amount = 5;
const deployer = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266";

export async function mint() {
  const _contract = await hre.ethers.getContractAt("ERC20", CONTRACT_ADDRESS);

  const owner = await _contract.owner();

  console.log("Owner: " + owner);

  const mintTX = await _contract.mint(recieverAddress, amount, {
    from: deployer,
  });

  console.log(`The Transaction Hash ${mintTX.hash}`);
}

mint()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
