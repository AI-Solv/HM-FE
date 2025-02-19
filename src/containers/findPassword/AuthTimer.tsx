import React, { useEffect } from "react";
import { usePasswordRecoveryStore } from "@/store/usePasswordRecoveryStore";

export default function AuthTimer() {
  const { timer, setTimer } = usePasswordRecoveryStore();

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (timer > 0) {
        setTimer(timer - 1);
      } else {
        clearInterval(intervalId);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timer, setTimer]);

  const timeFormat = (time: number) => {
    const minutes = Math.floor(time / 60).toString();
    let seconds = (time % 60).toString();
    if (seconds.length === 1) seconds = `0${seconds}`;
    return `${minutes}:${seconds}`;
  };

  return (
    <div
      style={{ color: "#ff6657" }}
      className="text-base font-medium font-['Pretendard'] leading-tight tracking-wide"
    >
      {timeFormat(timer)}
    </div>
  );
}
