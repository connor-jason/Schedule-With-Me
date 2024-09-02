import React from 'react'

function Activities({handleActivity} : {handleActivity: (event : string) => void}) {

    const activities = ["target", "starbucks", "food", "tiktok rot", "other???"];

    return (
        <div>
          {activities && activities.map((activity, index) => (
            <div key={index}>
              <button 
                type="button" 
                onClick={() => handleActivity(activity)}
                className="border border-black mb-2 p-1 rounded-lg hover:underline"
              >
                {activity}
              </button>
            </div>
          ))}
        </div>
      );
    };

export default Activities;