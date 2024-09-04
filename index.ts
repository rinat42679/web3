import {ethers, InfuraProvider, Provider} from "ethers";
import axios from "axios";

enum WEB_ENUM {
  SEPOLIA = 'sepolia'
}

const URL = 'https://sepolia.infura.io/v3/210874bef48644cb984c65d334b2b374'
const PROJECT_ID = '210874bef48644cb984c65d334b2b374'

async function main() {
  let provider: Provider

  provider = new ethers.JsonRpcProvider(URL)
  const infuraProvider = new InfuraProvider(WEB_ENUM.SEPOLIA, PROJECT_ID)

  // const feeData = await provider.getFeeData()
  const currentBlock = await provider.getBlockNumber()
  const blockData = await provider.getBlock(currentBlock)

  // console.log('feeData', feeData)
  console.log('currentBlock', currentBlock)
  console.log('blockData', blockData)
}

void main()
