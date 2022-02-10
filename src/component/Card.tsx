import React from "react";
import {useReadContractManager} from "../hook/useReadContractManager";

export const Card: React.FC = () => {
    const uri = useReadContractManager('uri', [2])


    return (
        <div>
            <span>{uri}</span>
        </div>
    )
}