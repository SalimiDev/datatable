import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = url => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            if (url) setIsLoading(true);
            try {
                const response = await axios.get(url);
                setData(response.data);
            } catch (error) {
                if (url) setError(true);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [url]);

    return { data, isLoading, error };
};

export default useFetch;