import { ChangeEvent, Dispatch, SetStateAction, useEffect, useState } from "react";

function App() {
    // 배열 구조분해 할당을 활용
    // useState의 인자는 초기값을 넣어줌
    const [count, setCount] = useState(0);
    const [value, setValue] = useInput('');

    // useEffect가 실행되는 시점에 DOM이 업데이트되었음을 보장
    useEffect(() => {
        document.title = `You clicked ${count} times`;

        // effect를 해제하려면 함수를 반환
        // 정리(clean up)가 필요한 경우 함수 반환
        return () => { }

        // 정리(clean up)가 필요하지 않은 경우 아무것도 반환하지 않음
    });

    return (
        <div>
            <p>you clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click me</button>
            <input type="text" onChange={setValue} value={value} />
        </div>
    );
}

export default App;

type ReturnsType = [string, (e: React.FormEvent<HTMLInputElement>) => void, Dispatch<SetStateAction<string>>]

const useInput = (initValue: string): ReturnsType => {
    const [value, setValue] = useState(initValue);
    const handler = (e: React.FormEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value);
    }

    return [value, handler, setValue];
}