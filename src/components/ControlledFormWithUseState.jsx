import { useState } from 'react';

const ControlledFormWithUseState = () => {
    const [state, setState] = useState({
        name: '',
        surname: '',
    });
    
    // Won't work out
    /*
        const handleNameChange = (e) => setState({
            name: e.target.value,
        });
        const handleSurnameChange = (e) => setState({
            surname: e.target.value,
        });
    */

    // Will work out
    const handleNameChange = (e) => setState({
        ...state,
        name: e.target.value,
    });
    const handleSurnameChange = (e) => setState({
        ...state,
        surname: e.target.value,
    });

    const handleSubmit = () => 
        alert(`Name: ${state.name} Surname: ${state.surname}`);

    // React doc way
    /*
        const [name, setName] = useState();
        const handleNameChange = (e) => setName(e.target.value);

        const [surname, setSurname] = useState();
        const handleSurnameChange = (e) => setSurname(e.target.value);

        const handleSubmit = () => 
            alert(`Name: ${name} Surname: ${surname}`);
    */

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input
                    type='text'
                    value={state.name}
                    onChange={handleNameChange}
                />
            </label>
            <label>
                Surname:
                <input
                    type='text'
                    value={state.surname}
                    onChange={handleSurnameChange}
                />
            </label>
            <input type='submit' value='Submit'/>
        </form>
    );
};

export default ControlledFormWithUseState;
