export const shortner = (account) => {
  return account?.slice(0, 4) + "..." + account?.slice(-4);
};
