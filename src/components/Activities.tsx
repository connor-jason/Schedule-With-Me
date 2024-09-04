import React, { useState } from 'react';

function Activities({ handleActivity }: { handleActivity: (event: string) => void }) {
    const [showTextBox, setShowTextBox] = useState(false);
    const [customActivity, setCustomActivity] = useState('');

    const activities = ["target", "starbucks", "food", "tiktok rot", "other???"];

    const handleButtonClick = (activity: string) => {
        if (activity === "other???") {
            setShowTextBox(true);
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
        <div className="flex flex-col items-center p-1">
            {activities && activities.map((activity, index) => (
                <div key={index}>
                    <button
                        type="button"
                        onClick={() => handleButtonClick(activity)}
                        className="border-2 border-black mb-2 p-1 rounded-lg hover:underline  w-36"
                    >
                        {activity}
                    </button>
                </div>
            ))}
            {showTextBox && (
                <div className="flex flex-col items-center">
                    <input
                        type="text"
                        value={customActivity}
                        onChange={handleCustomActivityChange}
                        className="border-2 border-black mb-2 p-1 rounded-lg"
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
        </div>
    );
}

export default Activities;