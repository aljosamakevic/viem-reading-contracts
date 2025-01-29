// lock - stavanger

import { http, createPublicClient, defineChain } from 'viem'
import { contract } from './contracts/lock.ts'

export const stavanger = defineChain({
  id: 50591822,
  name: 'Stavanger',
  nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
  rpcUrls: {
    default: { http: ['https://rpc.stavanger.gateway.fm'] },
  },
  blockExplorers: {
    default: { name: 'Blockscout', url: 'https://explorer.stavanger.gateway.fm' },
  },
  
})

const client = createPublicClient({
  chain: stavanger,
  transport: http(),

})


const [unlockTime, owner] = await Promise.all([
  client.readContract({
    ...contract,
    functionName: 'unlockTime',
  }),
  client.readContract({
    ...contract,
    functionName: 'owner',
  }),
  
  
])

const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Contract Information</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 20px;
    }
    .container {
      border: 1px solid #ccc;
      padding: 20px;
      border-radius: 5px;
      max-width: 600px;
      margin: auto;
    }
    .item {
      margin-bottom: 10px;
    }
    .label {
      font-weight: bold;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="item">
      <span class="label">Contract Address:</span> ${contract.address}
    </div>
    <div class="item">
      <span class="label">UnlockTime:</span> ${unlockTime}
    </div>
    <div class="item">
      <span class="label">Owner:</span> ${owner}
    </div>
  </div>
</body>
</html>
`;

export default htmlContent;







// // mintExample - sepolia

// import { http, createPublicClient } from 'viem'
// import { mainnet } from 'viem/chains'
// import { contract } from './Contracts/mintExample.ts'

// const client = createPublicClient({
//   chain: mainnet,
//   transport: http("https://mainnet.infura.io/v3/2N9POOyrFRVSKiIB0fdnTNxKU7k"),

// })

// const address = '0xa5cc3c03994DB5b0d9A5eEdD10CabaB0813678AC'

// // Note: this is a naive example – you should probably use multicall for these
// // types of batched reads instead.
// const [name, totalSupply, symbol, tokenUri, balance] = await Promise.all([
//   client.readContract({
//     ...contract,
//     functionName: 'name',
//   }),
//   client.readContract({
//     ...contract,
//     functionName: 'totalSupply',
//   }),
//   client.readContract({
//     ...contract,
//     functionName: 'symbol',
//   }),
//   client.readContract({
//     ...contract,
//     functionName: 'tokenURI',
//     args: [420n],
//   }),
//   client.readContract({
//     ...contract,
//     functionName: 'balanceOf',
//     args: [address],
//   }),
// ])

// export default [
  
//   `Contract Address: ${contract.address}`,
//   `Name: ${name}`,
//   `Total Supply: ${totalSupply}`,
//   `Symbol: ${symbol}`,
//   `Token URI of #420: ${tokenUri}`,
//   `Balance of ${address}: ${balance}`,
// ]


