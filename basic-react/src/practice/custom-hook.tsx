import { ChangeEvent, useState } from "react";

type ReturnsType = [string, (e: React.FormEvent<HTMLInputElement>) => void, () => void];

export function useInput(initialValue: string, submitAction: any): ReturnsType {
    const [inputValue, setInputValue] = useState(initialValue);

    const handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
        setInputValue(e.currentTarget.value);
    }

    const handleSubmit = () => {
        setInputValue("");
        submitAction(inputValue);
    }

    return [inputValue, handleChange, handleSubmit];
}