"use client";

import { useWallet } from "@/hooks/wallet/useWallet";

export default function WalletButton() {
    const { address, connect, disconnect } = useWallet();

    return (
        <div>
        {address ? (
            <>
                <p className="font-semibold">Connected: {address}</p>
                <button onClick={disconnect} className="border-2">Disconnect Wallet</button>
            </>
            
        ) : (
            <button onClick={connect} className="border-2">
            Connect Wallet
            </button>
        )}
        </div>
    );
}