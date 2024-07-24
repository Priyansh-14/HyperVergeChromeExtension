import { useEffect, useState } from "react";
import Stopwatch from "../Stopwatch";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import PomodoroSettings from "../PomodoroSettings";
import Analog from "../Analog";

const PomodoroTimer = () => {
  const [time, setTime] = useState(new Date());
  const [isWorkTime, setIsWorkTime] = useState(true);
  const [isRunningClock, setIsRunningClock] = useState(false);
  const [timers, setTimers] = useState(() => {
    const savedTimers = sessionStorage.getItem("timer");
    return savedTimers
      ? JSON.parse(savedTimers)
      : { workTime: 25, breakTime: 5 };
  });
  const [isRunning, setIsRunning] = useState(false);
  useEffect(() => {
    sessionStorage.setItem("timer", JSON.stringify(timers));
  }, [timers]);
  const handleStart = () => {
    setIsRunningClock((prev) => !prev);
    setTime(new Date());
    setIsRunning((prev) => !prev);
  };

  return (
    <Card className="w-80 aspect-[10/12] rounded-2xl bg-[#bfc1b5] relative ml-20 mt-14">
      <CardHeader className="mt-8">
        <CardTitle className="text-center">
          {isWorkTime ? "Pomodoro" : "Break"}
        </CardTitle>
        <CardDescription className="hidden">A Pomodoro Timer</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col justify-center items-center gap-6">
        <PomodoroSettings timers={timers} setTimers={setTimers} />
        <Analog isRunningClock={isRunningClock} setTime={setTime} time={time} />
        <Stopwatch
          minutes={timers.workTime}
          breakTime={timers.breakTime}
          isRunning={isRunning}
          setIsWorkTime={setIsWorkTime}
          isWorkTime={isWorkTime}
        />
      </CardContent>
      <CardFooter className="flex items-center justify-center ">
        <Button
          onClick={handleStart}
          variant="outline"
          className="shadow-lg w-20 h-10 bg-[#D0D0D0] border-none"
        >
          <p className="text-lg text-[#2A2A2A]">
            {isRunning ? "Pause" : "Start"}
          </p>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PomodoroTimer;
