import React from "react";
import {useEtherBalance} from "@usedapp/core";
import {utils} from 'ethers'

interface BalanceProps {
    account: string;
}

export const Balance: React.FC<BalanceProps> = ({account}) => {
    const balance = useEtherBalance(account)

    return (
        <div>
            {balance && <span>Balance: {utils.formatEther(balance)}</span>}
        </div>
    )
}