import Page from "./layout/Page";
import "./app.css";
import { useState } from "react";
import { ThemeContext, UserContext } from "./context/ThemeContext";

const App = () => {
    const [isDark, setIsDark] = useState(false);

    return (
        <UserContext.Provider value={"사용자"}>
            <ThemeContext.Provider value={{ isDark, setIsDark }}>
                <Page />
            </ThemeContext.Provider>
        </UserContext.Provider>
    );
}

export default App;