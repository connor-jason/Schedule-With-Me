import React, { useState } from 'react';

function Summary({ name, activity, calendar, handleYes, handleNo }: { name: string, activity: string, calendar: string, handleYes: () => void, handleNo: () => void }) {
    
    const [showRestart, setShowRestart] = useState(false);

    const toggleRestart = () => {
        setShowRestart(!showRestart);
    };

    return (
        <div className="flex flex-col items-start gap-2">
            <p>Name: {name}</p>
            <p>Activity: {activity}</p>
            <p>Date: {calendar}</p>
            <div className="flex flex-row">
                <button onClick={handleYes} className="hover:underline pr-12">Yes!</button>
                <button onClick={toggleRestart} className="hover:underline">No!</button>
            </div>
            {showRestart && <button onClick={handleNo} className="hover:underline p-2">Restart?</button>}
        </div>
    );
}

export default Summary;