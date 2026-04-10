"use client";

import { useEffect, useState } from "react";
import { useWallet } from "@/hooks/wallet/useWallet";
import { getMyPasses } from "@/lib/pass";

export default function PassList() {
    const { address } = useWallet();
    const [passes, setPasses] = useState([]);

    useEffect(() => {
        if (!address) return;

        async function load() {
            const data = await getMyPasses(address);
            setPasses(data);
        }

        load();
    }, [address]);

    return (
        <div>
        <h3>My Passes</h3>
        {passes.map((p, i) => (
            <p key={i}>{p}</p>
        ))}
        </div>
    );
}