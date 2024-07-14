import { useContext } from "react";
import { ThemeContext, UserContext } from "../context/ThemeContext";

function Header() {
    const { isDark } = useContext(ThemeContext);
    const user = useContext(UserContext);

    return (
        <header className="header" style={{
            backgroundColor: isDark ? "black" : "lightgrey",
            color: isDark ? "white" : "black"
        }}>
            <h1>Welcome {user}!</h1>
        </header>
    )
}

export default Header;