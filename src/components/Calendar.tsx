import React, { useState } from 'react';

function Calendar({ handleCalendar }: { handleCalendar: (calendar: Date) => void }) {
    const [selectedDate, setSelectedDate] = useState<string>('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedDate(event.target.value);
    };

    const handleSubmit = () => {
        if (selectedDate) {
            // Convert the selectedDate string to a Date object
            handleCalendar(new Date(selectedDate));
        } else {
            // Handle the case when no date is selected (optional)
            alert("Please select a date.");
        }
    };

    return (
        <div>
            <h1>Enter a date</h1>
            <input type="date" value={selectedDate} onChange={handleChange} />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}

export default Calendar;
