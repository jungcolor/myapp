import { useEffect, useState } from "react";

const App = () => {
    const [number, setNumber] = useState<number | string>(0);

    const someFuntion = () => {
        console.log(`someFunc: number: ${number}`);
        return;
    };

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
            <br />
            <button onClick={someFuntion}>Call someFunc</button>
        </div>
    );
}

export default App;