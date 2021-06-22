import { useState } from 'react';
import useDataFilter from '../hooks/useDataFilter';
import { filters } from '../consts/filters';

const ComponentWithCustomHook = () => {
    const [filter, setFilter] = useState();
    const data = useDataFilter(filter);

    const handleFilterUpdate = (e) => {
        e.preventDefault();
        setFilter(e.currentTarget.value);
    };

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

export default ComponentWithCustomHook;
