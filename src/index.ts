import { getLastBlockNumber, getUSDTBalance } from './ethereumInfo';

async function main() {
  console.log('Fetching last block number of Ethereum mainnet...');
  const lastBlockNumber = await getLastBlockNumber();
  console.log('Last block number:', lastBlockNumber);

  const address = 'YOUR_ADDRESS_HERE';
  console.log(`Fetching USDT balance for address ${address}...`);
  const balance = await getUSDTBalance(address);
  console.log('USDT balance:', balance);
}

main().catch(console.error);
