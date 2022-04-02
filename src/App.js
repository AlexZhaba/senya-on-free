import React, { useState, useEffect } from "react";
import Senya from "./senya.jpeg";

const initialTime = new Date("March 29, 2022 00:00:00");

const App = () => {
  const [timer, setTimer] = useState(Date.now() - initialTime.getTime());
  const [currentTime, setCurrentTime] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(timer => timer + 1000);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setCurrentTime(new Date(timer))
  }, [timer]);

  if (!currentTime) return <div>Loading</div>

  return (
    <div className="wrapper">
      <header className="header">
        <span>Senya is free</span>
      </header>
      <main className="main">
        <div>{ currentTime.getUTCFullYear() - 1970 } year</div>
        <div>{ currentTime.getUTCMonth() } month</div>
        <div>{ currentTime.getUTCDay() } days</div>
        <div>{ currentTime.getUTCHours() } hours</div>
        <div>{ currentTime.getUTCMinutes() } minutes</div>
        <div>{ currentTime.getUTCSeconds() } seconds</div>
      </main>
    </div>
  )
};

export default App;