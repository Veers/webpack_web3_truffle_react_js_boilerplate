import { useState } from "react";
import useEth from "../../contexts/EthContext/useEth";
import Title from "./Title";
import TotalVolume from "./TotalVolume";

function Mamont() {
    const { state } = useEth();
    const [value, setValue] = useState("?");

    const mamontDemo =
        <>
            <TotalVolume value={state.artifactToken} />
        </>;

    return (
        <div className="demo">
            <Title />
            {
                !state.artifactToken ? "no state art" :
                    !state.contract ? "wrong net" :
                        mamontDemo
            }
        </div>
    );
}

export default Mamont;
