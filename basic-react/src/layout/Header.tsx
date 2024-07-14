import { Props } from "../App";

function Header({ isDark }: Props) {
    return (
        <header className="header" style={{
            backgroundColor: isDark ? "black" : "lightgrey",
            color: isDark ? "white" : "black"
        }}>
            <h1>Welcome 홍길동!</h1>
        </header>
    )
}

export default Header;