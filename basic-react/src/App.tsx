import Page from "./layout/Page";
import "./app.css";
import { useState, Dispatch, SetStateAction } from "react";

export type Props = {
    isDark: boolean;
    setIsDark?: Dispatch<SetStateAction<boolean>>;
};

function App() {
    const [isDark, setIsDark] = useState(false);

    return <Page isDark={isDark} setIsDark={setIsDark} />;
}

export default App;