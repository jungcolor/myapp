import { useContext } from "react";
import { ThemeContext, UserContext } from "../context/ThemeContext";

const Contents = () => {
    const { isDark } = useContext(ThemeContext);
    const user = useContext(UserContext);

    return (
        <main className="contents" style={{
            backgroundColor: isDark ? "black" : "white",
            color: isDark ? "white" : "black"
        }}>
            <p>{user}님, 좋은 하루 되세요</p>
        </main>
    )
}

export default Contents;