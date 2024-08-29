// Placeholder to host a component
// components/Hours.js
import React from 'react';

const Hours = () => {
    const shelterHours = [
        { day: "Monday", open: "10:00", close: "16:00" },
        { day: "Tuesday", open: "10:00", close: "16:00" },
        { day: "Wednesday", open: "10:00", close: "16:00" },
        { day: "Thursday", open: "10:00", close: "16:00" },
        { day: "Friday", open: "10:00", close: "16:00" },
        { day: "Saturday", open: "09:00", close: "20:00" },
        { day: "Sunday", open: "09:00", close: "20:00" },
    ];

    const getTodayHours = () => {
        const today = new Date().toLocaleDateString('en-US', { weekday: 'long' });
        return shelterHours.find((day) => day.day === today);
    };

    const formatTime = (time) => {
        return new Date(`2000-01-01T${time}`).toLocaleTimeString('en-US', { 
            hour: 'numeric', 
            minute: 'numeric', 
            hour12: true 
        });
    };

    const todayHours = getTodayHours();

    if (!todayHours) {
        return <p>Hours information not available</p>;
    }

    return (
        <section className="hours-container" aria-labelledby="hours-heading">
            <h2 id="hours-heading" className="hours-heading">Today's Hours</h2>
            <p className="hours-info">
                <span className="day">{todayHours.day}:</span>{' '}
                <time>{formatTime(todayHours.open)}</time> - <time>{formatTime(todayHours.close)}</time>
            </p>
        </section>
    );
};

export default Hours;