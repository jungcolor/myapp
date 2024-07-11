import { useEffect, useState } from "react";

export default function useFetch(baseUrl: string, initialType: string) {
    const [data, setData] = useState(null);

    const fetchUrl = (type: string): void => {
        fetch(`${baseUrl}/${type}`)
            .then(res => res.json())
            .then(res => setData(res));
    };

    useEffect(() => {
        fetchUrl(initialType);
    }, []);

    return { data }
}