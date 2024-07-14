import { Props } from "../App";

const Contents = ({ isDark }: Props) => {
    return (
        <main className="contents" style={{
            backgroundColor: isDark ? "black" : "white",
            color: isDark ? "white" : "black"
        }}>
            <p>홍길동님, 좋은 하루 되세요</p>
        </main>
    )
}

export default Contents;