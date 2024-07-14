import Contents from "./Contents";
import Footer from "./Footer";
import Header from "./Header";

const Page = () => {
    return (
        <div className="page">
            <Header />
            <Contents />
            <Footer />
        </div>
    )
}

export default Page;