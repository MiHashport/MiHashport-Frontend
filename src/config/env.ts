export const env = {
  apiBaseUrl: process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://localhost:3001",
  stellarNetwork: process.env.NEXT_PUBLIC_STELLAR_NETWORK ?? "testnet",
  contractId: process.env.NEXT_PUBLIC_CONTRACT_ID ?? "",
} as const;
