<script setup lang="ts">
import {ref} from 'vue'
import {onMounted} from "#imports";
import {ethers, InfuraProvider, type Provider, Wallet} from "ethers";
import {WEB_ENUM} from "~/src/types/enums";
import {PROJECT_ID, URL, PRIVATE_KEY_METAMAKS} from "~/src/types/constants";

const walletRef = ref()
const randomWalletRef = ref()
const providerRef = ref()
const providerChainID = ref()

async function main() {
  let provider: Provider
  // const infuraProvider = new InfuraProvider(WEB_ENUM.SEPOLIA, PROJECT_ID)

  provider = new ethers.JsonRpcProvider(URL)
  providerRef.value = provider

  const currentBlock = await provider.getBlockNumber()
  const blockData = await provider.getBlock(currentBlock)


  const createdWallet = new Wallet(PRIVATE_KEY_METAMAKS, provider)

  console.log(await provider.getBalance(createdWallet.address))
  const randomWallet = Wallet.createRandom(provider)
  const providerNetwork = await provider.getNetwork()

  providerChainID.value = providerNetwork?.chainId
  walletRef.value = createdWallet
  randomWalletRef.value = randomWallet
}

async function sendDefaultTransaction(provider: Provider, sender: BaseWallet, recipient: string) {
  sendTransaction()
}

onMounted(async () => {
  await main()
})
</script>

<template>
  <div>
    <b>Provider ChainID:</b> {{ providerChainID }} <br>
    <br>
    <b>Wallet address:</b> {{ walletRef?.address }} <br>
    <br>
    <b>Random wallet address:</b> {{ randomWalletRef?.address }} <br>
  </div>
</template>
