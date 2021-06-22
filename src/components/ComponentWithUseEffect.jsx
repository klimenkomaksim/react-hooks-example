import { useState, useEffect } from 'react';
import fetchData from '../utils/fetchData';
import { filters } from '../consts/filters';

const ComponentWithUseEffect = () => {
    const [filter, setFilter] = useState();
    const [data, setData] = useState([]);

    const handleFilterUpdate = (e) => {
        e.preventDefault();
        setFilter(e.currentTarget.value);
    }

    // useEffect(() => {
    //     const handleClick = () => alert(`selected filter: ${filter}`);

    //     document.body.addEventListener('click', handleClick);

    //     return () => document.body.removeEventListener('click', handleClick);
    // }, [filter]);

    // Won't work out
    /*
        useEffect(async () => {
            const response = await fetchData(filter);
            setData(response);
        }, [filter]);
    */

    // Will work out
    useEffect(() => {
        const getData = async () => {
            const response = await fetchData(filter);
            setData(response);
        };
        
        getData();
    }, [filter]);
    
    return (
        <div>
            <div>
                {filters.map((filter) => (
                    <button
                        value={filter}
                        key={filter}
                        onClick={handleFilterUpdate}
                    >
                        {filter}
                    </button>
                ))}
            </div>
            <ul>
                {data.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </div>
    );    
};

export default ComponentWithUseEffect;
