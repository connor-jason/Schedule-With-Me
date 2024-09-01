import React from 'react'

function EnterName({handleName} : {handleName : (name : string) => void}) {

    const [name, setName] = React.useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };

    return (
        <div>
            <h1>Enter your name</h1>
            <form onSubmit={(e) => handleName(name)}>
                <input
                    type="text"
                    value={name}    
                    onChange={handleChange}
                    placeholder="Enter your name"
                />
                <button type="submit">Next</button>
            </form>
        </div>
    )
};

export default EnterName;