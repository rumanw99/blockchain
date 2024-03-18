const { getLastBlockNumber, getUSDTBalance } = require('../src/ethereumInfo');



describe('Ethereum Info', () => {
  it('should fetch last block number', async () => {
    const lastBlockNumber = await getLastBlockNumber();
    expect(lastBlockNumber).toBeGreaterThan(0);
  });

  it('should fetch USDT balance for a given address', async () => {
    const address = '0x4bbeEB066eD09B7AEd07bF39EEe0460DFa261520'; // Example USDT address
    const balance = await getUSDTBalance(address);
    expect(balance).toBeGreaterThanOrEqual(0);
  });
});
