import { ethers } from "ethers";
import React from "react";
import { toast } from "react-toastify";
import token from "./config";
import { MetaMaskInpageProvider } from "@metamask/providers";

declare global {
  interface Window {
    ethereum?: MetaMaskInpageProvider;
  }
}
export const connectWallet = async (
  setAccount: React.Dispatch<React.SetStateAction<string>>
) => {
  try {
    const { ethereum } = window;
    if (!ethereum) {
      toast.error("Pls Install Metamask");
      return;
    }
    const accounts = (await ethereum.request({
      method: "eth_requestAccounts",
    })) as string[];
    setAccount(accounts[0]);
  } catch (e: any) {
    console.log(e);
    toast.error(e.message);
  }
};

export const confirmWalletConnection = async (
  setAccount: React.Dispatch<React.SetStateAction<string>>
) => {
  try {
    const { ethereum } = window;
    if (!ethereum) {
      toast.error("Pls Install Metamask");
      return;
    }
    const accounts = (await ethereum.request({
      method: "eth_accounts",
    })) as string[];
    if (accounts?.length > 0) {
      setAccount(accounts[0] as string);
    }
  } catch (e: any) {
    toast.error(e.message);
  }
};
export type ExternalProvider<T extends string> = {
  isMetaMask?: boolean;
  isStatus?: boolean;
  host?: string;
  path?: string;
  request?: (request: { method: T; params?: Array<any> }) => Promise<any>;
};
export const contractInstance = async () => {
  const { ethereum } = window;
  const provider = await new ethers.providers.Web3Provider(ethereum);
  console.log(provider);
  const signer = await provider.getSigner();
  const contract = await new ethers.Contract(
    token.address,
    token.abi?.abi,
    signer
  );
  console.log(contract, "contract");

  return contract;
};

export const startPurchase = async (time_in_minutes: number) => {
  try {
    const contract = await contractInstance();
    await contract.callStatic.startPurchase(time_in_minutes);
    const res = await contract.startPurchase(time_in_minutes);
    await res.wait();
    toast.success("Purchase started successfully");
  } catch (err: any) {
    if (err && err?.data) {
      console.log(err?.data);
      const code = err.data?.replace("Reverted ", "");
      let reason = ethers.utils.toUtf8String("0x" + code.substr(138));
      toast.error(reason);
    } else if (err && err.code === 4001) {
      toast.error("user cancelled transaction");
    }
  }
};

export const BuyNow = async (_amount: string, price: string) => {
  try {
    const contract = await contractInstance();
    const option = {
      value: ethers.utils.parseEther(price),
    };
    await contract.callStatic.sendBNB(_amount, option);
    const res = await contract.sendBNB(_amount, option);
    await res.wait();
    toast.success("Purchased successfully");
  } catch (err: any) {
    if (err && err?.data) {
      const code = err.data?.replace("Reverted ", "");
      let reason = ethers.utils.toUtf8String("0x" + code.substr(138));
      toast.error(reason);
    } else if (err && err.code === 4001) {
      toast.error("user cancelled transaction");
    }
  }
};

export const PurchaseDetails = async () => {
  try {
    const contract = await contractInstance();
    const details = {} as any;
    details.startTime = await contract.startTime();
    details.deadline = await contract.deadline();
    details.elapsed = await contract.hasElapsed();
    details.totalTokens = await contract.totalTokenPurchased();
    details.transactions = await contract.getAllTransactions();
    return details;
  } catch (err: any) {
    toast.error(err?.message);
  }
};
