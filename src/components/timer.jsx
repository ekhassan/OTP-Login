import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [seconds, setSeconds] = useState(60);

  useEffect(() => {
    // Exit the useEffect if the timer reaches 0
    if (seconds === 0) return;

    // Create an interval to decrement the timer every second
    const intervalId = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds - 1);
    }, 1000);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [seconds]); // useEffect will re-run whenever seconds changes

  return (
    <div>
      {seconds > 0 ? (
        <p>00:{seconds} s</p>
      ) : (
        <p>OTP has expired!</p>
      )}
    </div>
  );
};

export default Timer;
