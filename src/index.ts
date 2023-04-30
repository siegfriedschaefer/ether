import { ethers } from 'ethers';

const main = async () => {
    const provider = new ethers.JsonRpcProvider('https://arb1.arbitrum.io/rpc');
    const blockNumber = await provider.getBlockNumber();
    console.log('blockNumber: ', blockNumber);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error)
    process.exit(1)
  })

