import React, { useState } from "react";
import { useEffect, useRef } from "react";
import { useInterval } from "../hooks/useInterval";
import { padZero } from "../utils/date";
import { PlasmicTime, DefaultTimeProps } from "./plasmic/easytime/PlasmicTime";

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
    <PlasmicTime hour={padZero(hours)} min={padZero(minutes)} type={type} />
  );
}
export default Time;
