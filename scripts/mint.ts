import hre from "hardhat";
import { ethers } from "hardhat";
import { DEPLOYER, RECEIVER, CONTRACT_ADDRESS } from "../helper";

const _CONTRACT_ADDRESS = CONTRACT_ADDRESS;
const recieverAddress = RECEIVER;
const amount = 20;
const deployer = DEPLOYER;

export async function mint() {
  const _contract = await hre.ethers.getContractAt("_ERC20", _CONTRACT_ADDRESS);

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
