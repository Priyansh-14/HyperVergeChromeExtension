import { useCallback, useEffect, useState } from "react";

interface StopwatchProps {
    minutes: number;
    isRunning: boolean;
}

const Stopwatch: React.FC<StopwatchProps> = ({ minutes, isRunning }) => {
    const [countDownTime, setCountDownTime] = useState({
        minutes,
        seconds: 0,
    });
    const getTimeDifference = useCallback((endTime: number) => {
        const currentTime = new Date().getTime();
        const timeDifference = endTime - currentTime;
        const minutes = Math.floor((timeDifference % (60 * 60 * 1000)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (60 * 1000)) / 1000);

        if (timeDifference < 0) {
            setCountDownTime({
                minutes: 0,
                seconds: 0,
            });
        } else {
            setCountDownTime({
                minutes,
                seconds,
            });
        }
    }, []);

    useEffect(() => {
        setCountDownTime({
            minutes,
            seconds: 0,
        })
    }, [minutes])
    useEffect(() => {

        if (isRunning) {
            const countDownDate = new Date().getTime() + minutes * 60 * 1000;

            const interval = setInterval(() => {
                getTimeDifference(countDownDate);
            }, 1000);

            return () => clearInterval(interval);
        }
    }, [isRunning, minutes, getTimeDifference]);

    return (
        <div className="flex items-center justify-center">
            <p>{String(countDownTime.minutes).padStart(2, '0')}:{String(countDownTime.seconds).padStart(2, '0')}</p>
        </div>
    );
};
export default Stopwatch;