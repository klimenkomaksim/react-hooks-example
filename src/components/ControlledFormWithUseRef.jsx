import { useState, useRef } from 'react';

const ControlledFormWithUseRef = () => {
    const [name, setName] = useState();
    const nameElement = useRef(null);
    const handleNameChange = () => setName(nameElement.current.value);
    
    const [surname, setSurname] = useState();
    const surnameElement = useRef(null);
    const handleSurnameChange = () => setSurname(surnameElement.current.value);
    
    const handleSubmit = () => 
        alert(`Name: ${name} Surname: ${surname}`);

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input
                    type='text'
                    value={name}
                    onChange={handleNameChange}
                    ref={nameElement}
                />
            </label>
            <label>
                Surname:
                <input
                    type='text'
                    value={surname}
                    onChange={handleSurnameChange}
                    ref={surnameElement}
                />
            </label>
            <input type='submit' value='Submit'/>
        </form>
    );
};

export default ControlledFormWithUseRef;
