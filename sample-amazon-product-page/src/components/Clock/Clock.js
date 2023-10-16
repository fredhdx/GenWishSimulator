import React, { useState, useEffect } from 'react';

function Clock() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    // Update the current time every minute
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000); // 60,000 milliseconds = 1 minute

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();

  const formattedHours = (hours < 10 ? '0' : '') + hours;
  const formattedMinutes = (minutes < 10 ? '0' : '') + minutes;

  const currentTimeString = `${formattedHours}:${formattedMinutes}`;

  return <div>{currentTimeString}</div>;
}

export default Clock;
