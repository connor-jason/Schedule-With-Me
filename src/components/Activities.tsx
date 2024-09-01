import React from 'react'

function Activities({handleActivity} : {handleActivity: (event : string) => void}) {

    const activities = ["target", "starbucks", "food", "tiktok rot", "other???"];

    return (
        <div>
          {activities && activities.map((activity, index) => (
            <div key={index} className="border border-black mb-2">
              <button 
                type="button" 
                onClick={() => handleActivity(activity)}
              >
                {activity}
              </button>
            </div>
          ))}
        </div>
      );
    };

export default Activities;