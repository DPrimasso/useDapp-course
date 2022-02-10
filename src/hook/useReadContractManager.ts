import {utils} from "ethers";
import {useContractCall} from "@usedapp/core";


export function useReadContractManager(method: string, args?: any[]) {
    if (args === undefined) {
        args = []
    }
    const contract_address = '0x67048daDf010dD5AB3796630E9f90c2faa611A17';
    const contractAbi = new utils.Interface(
        require(`../abi/contractManagerAbi.json`)
    );
    const contractResult = useContractCall(
        {
            abi: contractAbi,
            address: contract_address,
            method,
            args
        }
    )

    return contractResult === undefined ? [] : contractResult[0]
}