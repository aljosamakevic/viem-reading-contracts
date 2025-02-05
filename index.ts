// import { http, createPublicClient, defineChain } from 'viem'
import { contract } from './contracts/simpleMessage.ts'
import contractInfoTemplate from './contractInfoTemplate';

// export const stavanger = defineChain({
//   id: 50591822,
//   name: 'Stavanger',
//   nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
//   rpcUrls: {
//     default: { http: ['https://rpc.stavanger.gateway.fm'] },
//   },
//   blockExplorers: {
//     default: { name: 'Blockscout', url: 'https://explorer.stavanger.gateway.fm' },
//   },
// })

// const client = createPublicClient({
//   chain: stavanger,
//   transport: http(),

// })

const [message, owner] = ["Hello, World!", "0x1234567890123456789012345678901234567890"];
// const [message, owner] = await Promise.all([
//   client.readContract({
//     ...contract,
//     functionName: 'message',
//   }),
//   client.readContract({
//     ...contract,
//     functionName: 'owner',
//   }),
// ])

const htmlContent = contractInfoTemplate(contract.address, message, owner);
export default htmlContent;