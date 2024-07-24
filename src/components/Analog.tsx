import { useEffect } from "react";
import Clock from "react-clock";
import "react-clock/dist/Clock.css"; // Importing the CSS for react-clock
import "../styles/react-clock.css";

interface AnalogProps {
  isRunningClock: boolean;
  setTime: (val: Date) => void;
  time: Date;
}

export default function Analog({ setTime, isRunningClock, time }: AnalogProps) {
  useEffect(() => {
    if (!isRunningClock) return;
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, [isRunningClock]);

  return (
    <div>
      <Clock value={time} />
    </div>
  );
}
