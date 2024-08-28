// Placeholder to host a component
// components/Hours.js
import React from 'react';

const Hours = () => {
  const currentDate = new Date();
  const currentDay = currentDate.getDay();
  const daysOfWeek = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
  const currentDayName = daysOfWeek[currentDay];

  const hours = Array.from({ length: 24 }, (_, i) => i);

  return (
    <div>
      <h2>Hours for {currentDayName}</h2>
      <ul>
        {hours.map(hour => (
          <li key={hour}>{hour}:00</li>
        ))}
      </ul>
    </div>
  );
};

export default Hours;