import React, { useState } from 'react';

function Summary({ name, activity, calendar, handleYes, handleNo }: { name: string, activity: string, calendar: string, handleYes: () => void, handleNo: () => void }) {
    
    const [showRestart, setShowRestart] = useState(false);

    const toggleRestart = () => {
        setShowRestart(true);
    };

    return (
        <div className="flex flex-col items-start gap-2">
            <p>Name: {name}</p>
            <p>Activity: {activity}</p>
            <p>Date: {calendar}</p>
            <div className="flex flex-row justify-around w-full">
                <button onClick={handleYes} className="hover:underline p-1 border-2 border-black rounded-lg w-36">
                    Yes!
                </button>
                <button onClick={toggleRestart} className="hover:underline p-1 border-2 border-black rounded-lg w-36">
                    No!
                </button>
            </div>
            <div className="w-full">
                {showRestart && 
                <div className="flex flex-row justify-around w-full">
                    <button className="p-2 w-36"></button>
                    <button onClick={handleNo} className="hover:underline p-2 border-2 border-black rounded-lg w-36">Restart?</button>
                </div>
                }
            </div>
        </div>
    );
}

export default Summary;