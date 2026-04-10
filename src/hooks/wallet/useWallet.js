"use client";

import { useState } from "react";
import { getProvider } from "@/lib/provider";

export function useWallet() {
    const [address, setAddress] = useState(null);

    const connect = async () => {
        const provider = await getProvider();
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const signer = await provider.getSigner();
        const addr = await signer.getAddress();
        setAddress(addr);
    };

    const disconnect = () => {
        setAddress(null);
    };

    return { address, connect, disconnect };
}