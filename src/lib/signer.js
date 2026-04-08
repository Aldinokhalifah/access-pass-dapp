import { getProvider } from "./provider";

export async function getSigner() {
    const provider = getProvider();
    (await provider).send("eth_requestAccounts", []);
    return (await provider).getSigner();
}