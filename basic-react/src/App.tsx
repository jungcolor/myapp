import { useCallback, useEffect, useState } from "react";

const App = () => {
    const [number, setNumber] = useState<number | string>(0);
    const [toggle, setToggle] = useState(true);

    const someFuntion = useCallback(() => {
        console.log(`someFunc: number: ${number}`);
        return;
    }, [number]);

    useEffect(() => {
        console.log("someFunction이 변경되었습니다.");
    }, [someFuntion]);

    return (
        <div>
            <input
                type="number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
            />
            <button onClick={() => setToggle(!toggle)}>{toggle.toString()}</button>
            <br />
            <button onClick={someFuntion}>Call someFunc</button>
        </div>
    );
}

export default App;