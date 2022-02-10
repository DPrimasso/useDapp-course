import {Contract, utils} from "ethers";
import {useContractFunction} from "@usedapp/core";

export function useWriteContract(method: string) {
    const contractAbi = new utils.Interface(
        require('../abi/ERC1155manager.json')
    )

    const contract_address = '0x36FeB2E20A9087A3CABFA82c99fA7D284E024345';

    const contract = new Contract(contract_address, contractAbi)

    return useContractFunction(contract, method)
}