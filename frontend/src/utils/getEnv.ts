export const getExplorerUrl = () => {
  return process.env.NEXT_PUBLIC_EXPLORER;
};

export const getFlipCoinAddress = () => {
  return process.env.NEXT_PUBLIC_FLIPCOIN_ADDRESS || "0x0";
};
