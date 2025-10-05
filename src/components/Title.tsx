import localFont from "next/font/local";

const beautifulChristmasFont = localFont({
  src: "../app/fonts/BeautifulChristmas.ttf",
});

export const Title = () => {
  return (
    <div
      className={`text-amber-300 text-5xl md:text-7xl ${beautifulChristmasFont.className}`}
      style={{ WebkitTextStroke: "1px white" }}
    >
      Noël est dans
    </div>
  );
};
