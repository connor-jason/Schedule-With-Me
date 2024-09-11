import React, { useState } from 'react';

function Activities({ handleActivity }: { handleActivity: (event: string) => void }) {
    const [showTextBox, setShowTextBox] = useState(false);
    const [customActivity, setCustomActivity] = useState('');

    const activities = ["target", "starbuck", "dunkin", "food", "tiktok", "other???"];

    const handleButtonClick = (activity: string) => {
        if (activity === "other???") {
            setShowTextBox(!showTextBox);
        } else {
            handleActivity(activity);
        }
    };

    const handleCustomActivityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCustomActivity(event.target.value);
    };

    const handleCustomActivitySubmit = () => {
        handleActivity(customActivity);
        setShowTextBox(false);
        setCustomActivity('');
    };

    return (
        <>
        <div className="grid grid-cols-3 gap-2 mt-1 w-full">
            {activities && activities.map((activity, index) => (
                <div key={index}>
                    <button
                        type="button"
                        onClick={() => handleButtonClick(activity)}
                        className="border-2 border-black p-1 rounded-lg hover:underline w-[30vw] h-[4em] md:w-36"
                    >
                        {activity}
                    </button>
                </div>
            ))}
            </div>
            {showTextBox && (
                <div className="flex flex-col items-center justify-center absolute left-0 right-0 -bottom-[5em] mx-auto">
                    <input
                        type="text"
                        value={customActivity}
                        onChange={handleCustomActivityChange}
                        className="border-2 border-black mb-2 p-1 rounded-lg max-w-[75vw] mt-4"
                    />
                    <button
                        type="button"
                        onClick={handleCustomActivitySubmit}
                        className="p-1 hover:underline w-36 border-2 border-black rounded-lg"
                    >
                        Submit
                    </button>
                </div>
            )}
        </>

    );
}

export default Activities;