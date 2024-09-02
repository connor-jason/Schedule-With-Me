import React from 'react'

function EnterName({handleName} : {handleName : (name : string) => void}) {

    const [name, setName] = React.useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (name.trim() !== '') {
            handleName(name);
        }
    };

    return (
        <div className="flex flex-col">
            <h1>Enter your name</h1>
            <form className="items-start flex flex-col" onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={name}    
                    onChange={handleChange}
                    placeholder=""
                    className="border border-black b-1"
                />
                <button type="submit">Next</button>
            </form>
        </div>
    )
};

export default EnterName;