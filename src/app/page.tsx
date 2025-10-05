"use client";

import { Countdown } from "@/components/Countdown";
import { Title } from "@/components/Title";
import Snowfall from "react-snowfall";

export default function Home() {
  return (
    <div className="w-screen h-screen bg-[url('/christmas-background.png')] bg-cover flex flex-col gap-8 md:gap-16 items-center justify-center relative">
      <Title />
      <Countdown />
      <Snowfall snowflakeCount={300} />
    </div>
  );
}
