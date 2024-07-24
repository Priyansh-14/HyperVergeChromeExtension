import { useEffect, useState } from "react";
import Clock from "react-clock";
import "react-clock/dist/Clock.css"; // Importing the CSS for react-clock
import "../styles/react-clock.css";

export default function Analog() {
  const [value, setValue] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setValue(new Date()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <Clock value={value} />;
}
