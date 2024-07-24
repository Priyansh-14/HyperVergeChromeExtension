import { useState } from "react";
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
import Analog from "../Analog";

const PomodoroTimer = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [minutes, setMinutes] = useState(25); // Default to 25 minutes

  const handleStart = () => {
    setIsRunning(true);
  };

  return (
    <Card className="w-80 aspect-[10/12] rounded-2xl bg-[#bfc1b5] relative">
      <CardHeader>
        <CardTitle className="text-center">
          Pomodoro <Button></Button>
        </CardTitle>
        <CardDescription className="hidden">A Pomodoro Timer</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4 justify-center items-center">
        <Analog />
        <Stopwatch minutes={minutes} isRunning={isRunning} />
      </CardContent>
      <CardFooter className="flex items-center justify-center ">
        <Button
          onClick={handleStart}
          variant="outline"
          className="shadow-lg w-20 h-10 bg-[#D0D0D0] border-none"
        >
          <p className="text-lg text-[#2A2A2A]">Start</p>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PomodoroTimer;
