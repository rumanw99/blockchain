import { ethers } from 'ethers';

const USDT_ADDRESS = '0xdac17f958d2ee523a2206206994597c13d831ec7';
const USDT_ABI = [
  {
    constant: true,
    inputs: [{ name: '_owner', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: 'balance', type: 'uint256' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
];

async function getLastBlockNumber(): Promise<number> {
  const provider = new ethers.JsonRpcProvider('https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID');
  return await provider.getBlockNumber();
}

async function getUSDTBalance(address: string): Promise<number> {
  const provider = new ethers.JsonRpcProvider('https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID');
  const contract = new ethers.Contract(USDT_ADDRESS, USDT_ABI, provider);
  const balance = await contract.balanceOf(address);
  return balance.toNumber();
}

export { getLastBlockNumber, getUSDTBalance };
