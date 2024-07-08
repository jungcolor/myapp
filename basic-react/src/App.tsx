import { ChangeEvent, Dispatch, ReactNode, SetStateAction, useCallback, useEffect, useState } from "react";

function App() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `You clicked ${count} times`;

        // effect를 해제하려면 함수를 반환
        return () => { }
    });

    return (
        <div>
            <p>you clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click me</button>
        </div>
    );
}

export default App;