import { getFactoryContract } from "./factory";

export async function createPass(name, symbol, baseURI) {
    const contract = await getFactoryContract(true);

    console.log("contract runner:", contract.runner);
    const tx = await contract.createPass(name, symbol, baseURI);
    await tx.wait();

    return tx;
}

export async function getMyPasses(address) {
    const contract = await getFactoryContract();

    const passes = await contract.getPassesByCreator(address);

    return passes;
}