import { useEffect, useState } from "react";
import useEth from "../../contexts/EthContext/useEth";

function TotalVolume({value}) {
    const { state: { contractToken } } = useEth();
    const [totalSup, setTotalSup] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=>{
        const fetchTotalAmount = async() => {
            try{
                const valu = await contractToken.methods.totalSupply().call()
                setTotalSup(valu)
                setIsLoading(false)
            } catch (error) {
                setIsLoading(false)
            }
        }
        fetchTotalAmount()
    }, [value, contractToken]);
    return (
        <span>
            Total volume: {isLoading ? '---' : totalSup}
        </span>
    )
}

export default TotalVolume;