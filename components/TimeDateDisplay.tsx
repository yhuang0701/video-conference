"use client"
import { useState, useEffect } from 'react';

const TimeDateDisplay = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  const time = currentTime.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' });
  const date = (new Intl.DateTimeFormat(undefined, { dateStyle: 'full' })).format(currentTime);

  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-4xl font-extrabold lg:text-7xl">
        {time}
      </h1>
      <p className="text-lg font-medium text-sky-1 lg:text-2xl max-md:px-1 lg:px-2">{date}</p>
    </div>
  );
}

export default TimeDateDisplay;