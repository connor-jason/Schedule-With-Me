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
            <form className="items-start flex flex-col gap-2" onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={name}    
                    onChange={handleChange}
                    placeholder=""
                    className="border-2 border-black rounded-lg px-1 mt-2 max-w-[75vw] md:w-96"
                />
                <button type="submit" className="hover:underline border-2 border-black rounded-lg p-1 w-36">Next</button>
            </form>
        </div>
    )
};

export default EnterName;