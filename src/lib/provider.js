import { ethers } from "ethers";

export async function getProvider() {
    if(!window.ethereum) throw new Error('Metamask not found')
    return new ethers.BrowserProvider(window.ethereum);
}