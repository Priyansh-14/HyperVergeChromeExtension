import { useCallback, useEffect, useRef, useState } from "react";

interface StopwatchProps {
  minutes: number;
  isRunning: boolean;
}

const Stopwatch: React.FC<StopwatchProps> = ({ minutes, isRunning }) => {
  const [countDownTime, setCountDownTime] = useState({
    minutes,
    seconds: 0,
  });
  const [remainingTime, setRemainingTime] = useState(minutes * 60 * 1000);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const endTimeRef = useRef<number | null>(null);

  const getTimeDifference = useCallback((endTime: number) => {
    const currentTime = new Date().getTime();
    const timeDifference = endTime - currentTime;
    const minutes = Math.floor(
      (timeDifference % (60 * 60 * 1000)) / (1000 * 60)
    );
    const seconds = Math.floor((timeDifference % (60 * 1000)) / 1000);

    if (timeDifference < 0) {
      setCountDownTime({
        minutes: 0,
        seconds: 0,
      });
      clearInterval(intervalRef.current!);
    } else {
      setCountDownTime({
        minutes,
        seconds,
      });
      setRemainingTime(timeDifference);
    }
  }, []);

  useEffect(() => {
    setCountDownTime({
      minutes,
      seconds: 0,
    });
    setRemainingTime(minutes * 60 * 1000);
  }, [minutes]);

  useEffect(() => {
    if (isRunning) {
      const countDownDate = new Date().getTime() + remainingTime;
      endTimeRef.current = countDownDate;

      intervalRef.current = setInterval(() => {
        getTimeDifference(countDownDate);
      }, 1000);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isRunning, remainingTime, getTimeDifference]);

  return (
    <div className="flex items-center justify-center">
      <p className="text-2xl font-semibold">
        {String(countDownTime.minutes).padStart(2, "0")}:
        {String(countDownTime.seconds).padStart(2, "0")}
      </p>
    </div>
  );
};

export default Stopwatch;
