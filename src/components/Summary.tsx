import React from 'react'

function Summary({name, activity, calendar, handleSubmit} : {name: string, activity: string, calendar: Date, handleSubmit: () => void}) {

    return (
        <div>
            <p>Name: {name}</p>
            <p>Activity: {activity}</p>
            <p>Date: {calendar.toString()}</p>
            <button onClick={handleSubmit}>Yes!</button>
        </div>
    )
};

export default Summary;