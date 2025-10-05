"use client";

import { useEffect, useMemo, useState, type JSX } from "react";
import { CountdownFigure } from "./CountdownFigure";

export const Countdown = (): JSX.Element => {
  const [timeInterval, setTimeInterval] = useState<null | number>(null);

  const nextChristmasEpoch = useMemo(() => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth(); // 0 to 11
    const currentDay = currentDate.getDate();

    const isChristmasOverThisYear = currentMonth === 11 && currentDay > 24;
    const christmasYear = isChristmasOverThisYear
      ? currentYear + 1
      : currentYear;

    const christmasEpoch = new Date(
      `${christmasYear}-12-24T23:59:59`
    ).getTime();

    return christmasEpoch;
  }, []);

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      const remainingTime = nextChristmasEpoch - Date.now();
      const remainingTimeInSeconds = Math.floor(remainingTime / 1000);
      setTimeInterval(remainingTimeInSeconds);
    }, 1000);

    return () => clearInterval(countdownInterval);
  });

  if (timeInterval === null) {
    return <div></div>;
  }

  const seconds = timeInterval % 60;
  const secondsLabel = seconds > 1 ? "secondes" : "seconde";
  const timeIntervalInMinutes = Math.floor(timeInterval / 60);
  const minutes = timeIntervalInMinutes % 60;
  const minutesLabel = minutes > 1 ? "minutes" : "minute";
  const timeIntervalInHours = Math.floor(timeIntervalInMinutes / 60);
  const hours = timeIntervalInHours % 24;
  const hoursLabel = hours > 1 ? "heures" : "heure";
  const days = Math.floor(timeIntervalInHours / 24);
  const daysLabel = days > 1 ? "jours" : "jour";

  return (
    <div className="flex flex-row gap-2 md-gap-3">
      <CountdownFigure number={days} label={daysLabel} />
      <CountdownFigure number={hours} label={hoursLabel} />
      <CountdownFigure number={minutes} label={minutesLabel} />
      <CountdownFigure number={seconds} label={secondsLabel} />
    </div>
  );
};
