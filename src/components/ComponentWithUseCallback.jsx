import { useState, useEffect, useCallback, React } from 'react';
import useDataFilter from '../hooks/useDataFilter';
import { filters } from '../consts/filters';

const ComponentWithUseCallback = () => {
    const [filter, setFilter] = useState();
    const data = useDataFilter(filter);

    const handleFilterUpdate = (e) => {
        e.preventDefault();
        setFilter(e.currentTarget.value);
    };

    const handleClick = useCallback(
        () => alert(`selected filter: ${filter}`),
        [filter]
    );

    useEffect(() => {
        document.body.addEventListener('click', handleClick);

        return () => document.body.removeEventListener('click', handleClick);
    });

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

// React.memo — is a Higher-Order Component
// React memorizes the rendered output of the wrapped in React.memo component
// and then skips unnecessary renderings
export default React.memo(ComponentWithUseCallback);
