import {useWriteContract} from "../hook/useWriteContract";

export const Approve = () => {
    const {state, send} = useWriteContract('setApprovalForAll');

    const approve = async () => {
        await send('', true)
    }

    return (
        <div>
            <button onClick={approve}>Approve</button>
            <span>State approve: {state.status}</span>
        </div>
    )
}