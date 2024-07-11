import { useEffect, useRef, useState } from "react";

function App() {
    const [count, setCount] = useState(0);
    const renderCount = useRef(1);

    useEffect(() => {
        console.log("랜더링! ", renderCount.current = renderCount.current + 1);
    });

    const increseCount = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <p>{count}</p>
            <button type="button" onClick={increseCount}>숫자 올려</button>
        </div>
    );
}

export default App;