import { useCallback, useEffect, useState } from "react";
import Box from "./components/box";

function App() {
    const [size, setSizes] = useState<number>(100);
    const [isDark, setIsDark] = useState(false);

    const createBoxStyle = useCallback(() => {
        return {
            backgroundColor: "pink",
            width: `${size}px`,
            height: `${size}px`
        };
    }, [size]);

    return (
        <div style={{
            backgroundColor: isDark ? "black" : "white"
        }}>
            <input
                type="number"
                value={size}
                onChange={(e) => setSizes(Number(e.target.value))}
            />
            <button onClick={() => setIsDark(!isDark)}>Change Theme</button>
            <Box createBoxStyle={createBoxStyle} />
        </div>
    );
}

export default App;