import React, { useState } from "react";
import { useEffect, useRef } from "react";
import { PlasmicTime, DefaultTimeProps } from "./plasmic/easytime/PlasmicTime";
function useInterval(callback: () => void, delay: number | null) {
  const savedCallback = useRef(callback);
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (delay === null) {
      return;
    }
    const id = setInterval(() => savedCallback.current(), delay);
    return () => clearInterval(id);
  }, [delay]);
}
type Props = {
  type: "large" | "inHeader" | undefined;
};
function Time({ type }: Props) {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  useInterval(() => {
    const date = new Date();
    setHours(date.getHours());
    setMinutes(date.getMinutes());
  }, 3000);
  return (
    <PlasmicTime hour={hours.toString()} min={minutes.toString()} type={type} />
  );
}
export default Time;
