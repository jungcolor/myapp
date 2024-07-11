import { useInput } from "./practice/custom-hook";
import Hook from "./practice/hook";

function displayMessage(message: string) {
    alert(message);
}

function App() {
    const [inputValue, handleChange, handleSubmit] = useInput("", displayMessage);

    return (
        <div id="root">
            <h1>useInput</h1>
            <input value={inputValue} onChange={handleChange} />
            <button type="button" onClick={handleSubmit}>확인</button>
        </div>
    );
}

export default App;