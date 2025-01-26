import {Button} from "@/components/ui/button.tsx";
import {useEffect, useState} from "react";

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval: number | undefined;

    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10); // Incrémente par 10ms
      }, 10);
    } else if (!isRunning && interval) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  const formatTime = (time: number) => {
    const milliseconds = time % 1000;
    const seconds = Math.floor((time / 1000) % 60);
    const minutes = Math.floor((time / 1000 / 60) % 60);
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}.${String(
        milliseconds / 10
    ).padStart(2, '0')}`;
  };

  return <div className="flex items-center justify-center h-screen">
    <div className="text-left space-y-6">
      <h1 className="text-5xl font-bold w-[200px]">{formatTime(time)}</h1>
      <div className="flex space-x-4">
        <Button
            variant={isRunning ? 'destructive' : 'default'}
            onClick={() => setIsRunning(!isRunning)}
        >
          {isRunning ? 'Pause' : 'Start'}
        </Button>
        <Button
            variant='secondary'
            onClick={() => setTime(0)}
            disabled={isRunning}
            className={`px-6 py-3 rounded-lg font-medium transition ${
                isRunning ? 'opacity-50 cursor-not-allowed' : ''
            }`}
        >
          Reset
        </Button>
      </div>
    </div>
  </div>
};

export default Stopwatch;