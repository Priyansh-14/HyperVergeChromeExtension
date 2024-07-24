import { FC, ChangeEvent } from "react";
import { Settings } from "lucide-react"
import { Button } from "./ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
interface Timers {
    workTime: number;
    breakTime: number;
}

interface PomodoroSettingsProps {
    timers: Timers;
    setTimers: React.Dispatch<React.SetStateAction<{
        workTime: number;
        breakTime: number;
    }>>
}

const PomodoroSettings: FC<PomodoroSettingsProps> = ({ timers, setTimers }) => {

    const handleTimeChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setTimers((prevTimers) => ({
            ...prevTimers,
            [name]: parseInt(value),
        }));
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button
                    className="absolute top-2 right-2"
                    size="icon"
                    type="button"
                    variant="link">
                    < Settings />
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Edit Timer</DialogTitle>
                    <DialogDescription>
                        Make changes to your timer here. Click save when you're done.
                    </DialogDescription>
                </DialogHeader>
                <Label htmlFor="workTime">Work Time</Label>
                <Input
                    type="number"
                    id="workTime"
                    name="workTime"
                    min={1}
                    max={60}
                    value={timers.workTime}
                    onChange={handleTimeChange} />
                <Label htmlFor="breakTime">Break Time</Label>
                <Input
                    type="number"
                    id="breakTime"
                    name="breakTime"
                    min={1}
                    max={60}
                    value={timers.breakTime}
                    onChange={handleTimeChange} />
            </DialogContent>
        </Dialog>
    )
}

export default PomodoroSettings

