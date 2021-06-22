import { useState, useEffect } from 'react';
import fetchData from '../utils/fetchData';

const useDataFilter = (filter) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const response = await fetchData(filter);
        
            setData(response);
        };

        getData();
    }, [filter]);

    return data;
};

export default useDataFilter;
