"use client";

import { useState } from "react";
import { createPass } from "@/lib/pass";

export default function CreatePassForm() {
    const [name, setName] = useState("");
    const [symbol, setSymbol] = useState("");
    const [baseURI, setBaseURI] = useState("");

    const handleCreate = async () => {
        try {
        await createPass(name, symbol, baseURI);
        alert("Pass created!");
        } catch (err) {
        console.error(err);
        alert("Failed");
        }
    };

    return (
        <div>
        <h3>Create Pass</h3>

        <input placeholder="Name" onChange={(e) => setName(e.target.value)} />
        <input placeholder="Symbol" onChange={(e) => setSymbol(e.target.value)} />
        <input placeholder="Base URI" onChange={(e) => setBaseURI(e.target.value)} />

        <button onClick={handleCreate}>Create</button>
        </div>
    );
}