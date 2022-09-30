import React, { useState, useEffect } from "react";

const Clock = () => {
  const [date, setDate] = useState(new Date().toLocaleTimeString("en-US"));

  useEffect(() => {
    document.title = date;
    const timerID = setInterval(() => tick(), 1000);
    return () => {
      clearInterval(timerID);
    };
  }, []);

  const tick = () => {
    setDate(new Date().toLocaleTimeString("en-US"));
  };

  return <div>{date}</div>;
};

export default Clock;
