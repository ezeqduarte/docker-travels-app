import { useEffect, useState } from "react";

export const useFetchCities = (url: string) => {
    const [data, setData] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchCities = async () => {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Error en la solicitud');
                }
                const citiesData: any[] = await response.json();
                setData(citiesData);
            } catch (err: any) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchCities();
    }, [url]);

    console.log({ data });
    
    return { data, loading, error };
};