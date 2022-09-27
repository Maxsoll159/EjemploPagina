import { useEffect, useRef, useState } from "react";
export default function (fecha) {
  const [timerDays, setTimeDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimeSeconds] = useState("00");
  let interval = useRef();
  const startTimer = () => {
    if (fecha[0] !== "Invalid") {
      const countdownDate = new Date(
        `${fecha[2]} ${fecha[1]}, ${fecha[3]} 00:00:00`
      ).getTime();
      interval = setInterval(() => {
        const now = new Date().getTime();
        const distance = countdownDate - now;
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        if (distance < 0) {
          clearInterval(interval.current);
        } else {
          setTimeDays(days);
          setTimerHours(hours);
          setTimerMinutes(minutes);
          setTimeSeconds(seconds);
        }
      }, 1000);
    }
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  });
  return [timerDays, timerHours, timerMinutes, timerSeconds];
}
