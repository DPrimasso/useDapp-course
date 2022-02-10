import {utils} from "ethers";
import {useContractCall} from "@usedapp/core";
import * as util from "util";


export function useReadContract(method: string, args?: any[]) {
    if (args === undefined) {
        args = []
    }
    const contract_address = '0x36FeB2E20A9087A3CABFA82c99fA7D284E024345';
    const contractAbi = new utils.Interface(
        require(`../abi/ERC1155manager.json`)
    );
    const contractResult = useContractCall(
        {
            abi: contractAbi,
            address: contract_address,
            method,
            args
        }
    )

    return contractResult === undefined ? utils.parseEther('0') : contractResult[0]
}