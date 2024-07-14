import { Props } from "../App";

const Footer = ({ isDark, setIsDark }: Props) => {
    const toggleTheme = () => {
        setIsDark?.(!isDark);
    }

    return (
        <footer className="footer" style={{
            backgroundColor: isDark ? "black" : "lightgray"
        }}>
            <button type="button" className="button" onClick={toggleTheme}>Dark Mode</button>
        </footer>
    )
}

export default Footer;