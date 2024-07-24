import { useState } from "react";
import Stopwatch from "../Stopwatch"
import { Button } from "../ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card"
import PomodoroSettings from "../PomodoroSettings";

const PomodoroTimer = () => {
    const [timers, setTimers] = useState({ workTime: 25, breakTime: 5 })
    const [isRunning, setIsRunning] = useState(false);

    const handleStart = () => {
        setIsRunning(!isRunning);
    };

    return (
        <Card className="w-80 aspect-[10/12] rounded-2xl bg-[#bfc1b5] relative">
            <CardHeader className="mt-8">
                <CardTitle className="text-center">Pomodoro </CardTitle>
                <CardDescription className="hidden">A Pomodoro Timer</CardDescription>
            </CardHeader>
            <CardContent>
                <PomodoroSettings timers={timers} setTimers={setTimers} />
                <Stopwatch minutes={timers.workTime} isRunning={isRunning} />
            </CardContent>
            <CardFooter className="flex items-center justify-center ">
                <Button onClick={handleStart} variant="outline" className="w-20 h-8"><p className="text-lg">{isRunning ? "Pause" : "Start"}</p></Button>
            </CardFooter>
        </Card >
    )
}

export default PomodoroTimer
