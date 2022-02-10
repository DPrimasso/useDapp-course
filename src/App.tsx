import React, {useState} from 'react';
import './App.css';
import {useEtherBalance, useEthers} from "@usedapp/core";
import {Balance} from "./component/Balance";
import {useReadContract} from "./hook/useReadContract";
import {utils} from "ethers";
import {useWriteContract} from "./hook/useWriteContract";
import {Approve} from "./component/Approve";
import {Card} from "./component/Card";

function App() {
    const {account, activateBrowserWallet} = useEthers()

    const [amount, setAmount] = useState('')
    const [message, setMessage] = useState('')

    const contract_balance = useReadContract("balanceOf", [account, 1])

    const {state, send} = useWriteContract('safeTransferFrom')

    const transfer = async () => {
        const amountFormatted = utils.parseEther(amount)
        await send('', '', 1, amountFormatted, [])
    }


    return (
        <div className="App">
            <button onClick={activateBrowserWallet}>Connect</button>
            {account && <span>Account: {account}</span>}
            {account && <Balance account={account}/>}

            <div>
                {contract_balance && <p>Contract Balance: {utils.formatEther(contract_balance)}</p>}
            </div>

            <div>
                <span>Transfer</span>
                <input onChange={(e) => setAmount(e.target.value)}/>
                <input onChange={e => setMessage(e.target.value)}/>
                <button onClick={transfer}>Send</button>
            </div>
            <span>{state.status}</span>

            <Approve />

            <Card />

        </div>
    );
}

export default App;
