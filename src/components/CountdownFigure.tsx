import localFont from "next/font/local";
import Image from "next/image";

type Props = {
  number: number;
  label: string;
};

const beautifulChristmasFont = localFont({
  src: "../app/fonts/BeautifulChristmas.ttf",
});

export const CountdownFigure = ({ number, label }: Props) => {
  return (
    <div className="rounded-full h-16 w-16 md:h-40 md:w-40 bg-transparent flex flex-col justify-center items-center relative">
      <Image
        src="/christmas-ball-small.png"
        width={160}
        height={180}
        alt="Christmas ball background"
        className="absolute bottom-0 left-0"
      />
      <span
        className={`z-10 text-amber-300 text-2xl md:text-7xl pr-2 md:pr-6 ${beautifulChristmasFont.className}`}
        style={{ WebkitTextStroke: "1px white" }}
      >
        {number}
      </span>
      <span
        className="z-10 text-amber-300 text-sm md:text-4xl"
        style={{ WebkitTextStroke: "1px white" }}
      >
        {label}
      </span>
    </div>
  );
};
