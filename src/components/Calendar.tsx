import React, { useState } from 'react';

function Calendar({ handleCalendar }: { handleCalendar: (calendar: string) => void }) {
    const [selectedDate, setSelectedDate] = useState<string>('');
    const [selectedTime, setSelectedTime] = useState<string>('');

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        const options: Intl.DateTimeFormatOptions = {
            weekday: 'long', // Full day of the week (e.g., "Monday")
            month: 'numeric', // Numeric month (e.g., "9")
            day: 'numeric', // Numeric day (e.g., "4")
        };
        return date.toLocaleDateString(undefined, options); // Format: "Monday, 9/4"
    };

    const formatTime = (timeString: string) => {
        const [hours, minutes] = timeString.split(':');
        const date = new Date();
        date.setHours(parseInt(hours), parseInt(minutes));
        const options: Intl.DateTimeFormatOptions = {
            hour: 'numeric', // Use numeric hour (e.g., "2")
            minute: 'numeric', // Use numeric minute (e.g., "05")
            hour12: true, // Use 12-hour format with AM/PM
        };
        return date.toLocaleTimeString(undefined, options); // Format: "2:30 PM"
    };

    const handleSubmit = () => {
        if (selectedDate && selectedTime) {
            const formattedDate = formatDate(selectedDate);
            const formattedTime = formatTime(selectedTime);
            handleCalendar(`${formattedDate} - ${formattedTime}`);
        } else {
            alert("Please select a date and time.");
        }
    };

    return (
        <div className="flex flex-row">
            <div className="flex flex-col">
                <h1>Enter a date</h1>
                <input 
                    type="date" 
                    value={selectedDate} 
                    onChange={(e) => setSelectedDate(e.target.value)} 
                />
            </div>
            <div className="flex flex-col">
                <h1>Enter a time</h1>
                <input 
                    type="time" 
                    value={selectedTime} 
                    onChange={(e) => setSelectedTime(e.target.value)} 
                />
            </div>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}

export default Calendar;
