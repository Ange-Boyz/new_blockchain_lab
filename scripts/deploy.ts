import { network } from "hardhat";

const { ethers, networkName } = await network.connect();

console.log(`Deploying SimpleStorage to ${networkName}...`);

const contract = await ethers.deployContract("SimpleStorage");

console.log("Waiting for deployment to confirm...");
await contract.waitForDeployment();

console.log("Contract deployed to:", await contract.getAddress());