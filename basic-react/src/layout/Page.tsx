import { Props } from "../App";
import Contents from "./Contents";
import Footer from "./Footer";
import Header from "./Header";

const Page = ({ isDark, setIsDark }: Props) => {
    return (
        <div className="page">
            <Header isDark={isDark} />
            <Contents isDark={isDark} />
            <Footer isDark={isDark} setIsDark={setIsDark} />
        </div>
    )
}

export default Page;