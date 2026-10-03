import { useEffect, useRef, useState } from "react";

function Coundown() {
  const [target, setTarget] = useState("");
  const [diff, setDiff] = useState(0);

  const intervalRef = useRef(null);

  const stop = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const handleStart = () => {
    if (!target) return console.warn("Select date and Time First");

    stop();

    const end = new Date(target).getTime();

    const tick = () => {
      const remaning = end - Date.now();
      if (remaning < 0) {
        setDiff(0);
        stop();
      } else {
        setDiff(remaning);
      }
    };

    tick();
    intervalRef.current = setInterval(tick, 1000);
  };

  useEffect(() => {
    if (diff < 0) {
      clearInterval(intervalRef.current);
      console.log(intervalRef.current);
      setDiff(0);
    }
  }, [diff]);

  const getDays = () => {
    return Math.floor(diff / (1000 * 60 * 60 * 24));
  };

  const getHours = () => {
    const hoursInMs = diff % (1000 * 60 * 60 * 24);
    return Math.floor(hoursInMs / (1000 * 60 * 60));
  };

  const getMinutes = () => {
    const minutesInMs = diff % (1000 * 60 * 60);
    return Math.floor(minutesInMs / (1000 * 60));
  };

  const getSeconds = () => {
    const secondsInMs = diff % (1000 * 60);
    return Math.floor(secondsInMs / 1000);
  };

  return (
    <div className="flex font-['sans-serif'] w-full h-full  items-center justify-center flex-col">
      <h1 className="text-5xl mb-8 ">Coundown App</h1>
      <div className="flex gap-4 mb-2  ">
        <input
          step="1"
          type="datetime-local"
          placeholder="select date and time"
          className="border-none bg-white text-black px-2 rounded-sm"
          value={target}
          onChange={(e) => setTarget(e.target.value)}
        />
        <button
          onClick={handleStart}
          type="submit"
          className="px-6 py-1 text-black rounded-sm bg-amber-200"
        >
          Start
        </button>
        <button
          onClick={() => {
            stop();
            setDiff(0);
          }}
          type="submit"
          className="px-6 py-1 text-black rounded-sm bg-red-400"
        >
          Reset
        </button>
      </div>
      Total Time in ms : {diff}
      <div className="Display w-85 h-28 rounded-sm mt-8 bg-blue-700 ">
        <ul className="flex w-full h-full items-center justify-center gap-8  ">
          <li className="text-sm flex items-center justify-center flex-col ">
            <span className="text-3xl">{getDays()}</span>
            Days
          </li>
          <li className="text-sm flex items-center justify-center flex-col ">
            <span className="text-3xl">{getHours()}</span>
            Hours
          </li>
          <li className="text-sm flex items-center justify-center flex-col ">
            <span className="text-3xl">{getMinutes()}</span>
            Minutes
          </li>
          <li className="text-sm flex items-center justify-center flex-col ">
            <span className="text-3xl">{getSeconds()}</span>
            Seconds
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Coundown;
