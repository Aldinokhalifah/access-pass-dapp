import { ethers } from "ethers";
import { FACTORY_ABI, FACTORY_ADDRESS } from "./contracts";
import { getProvider } from "./provider";

export async function getFactoryContract(withSigner = false) {
    const provider = await getProvider();

    if (withSigner) {
        const signer = await provider.getSigner();
        return new ethers.Contract(FACTORY_ADDRESS, FACTORY_ABI, signer);
    }
    console.log("withSigner:", withSigner);

    return new ethers.Contract(FACTORY_ADDRESS, FACTORY_ABI, provider);
}