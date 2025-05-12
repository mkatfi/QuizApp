import { useEffect, useState } from 'react';
import React from 'react';
import '../../styles/index.css'; 

const Timer = ({ time, onTimeout }) => {
  const [seconds, setSeconds] = useState(time);

  useEffect(() => {
    setSeconds(time);
  }, [time]);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          onTimeout?.();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [onTimeout]);

  return (
    <div className={`text-sm font-medium ${
      seconds <= 5 ? 'text-red-500' : 'text-gray-700'
    }`}>
      Time: {seconds}s
    </div>
  );
};

export default Timer;