import { ethers } from 'ethers';

const ARBITRUM_ENDPOINT = 'https://arb1.arbitrum.io/rpc';
const KAVA_ENDPOINT = 'https://evm.kava.io';

const main = async () => {
    const provider = new ethers.JsonRpcProvider(KAVA_ENDPOINT);
    const blockNumber = await provider.getBlockNumber();
    console.log('blockNumber: ', blockNumber);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error)
    process.exit(1)
  })

