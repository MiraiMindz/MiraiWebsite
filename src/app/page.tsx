"use client";
import Typewriter from "typewriter-effect";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { animateScroll as scroll } from "react-scroll";

const ScrollButton = dynamic(
  () => import("./components/ScrollToButtons/ScrollToButtons"),
  {
    ssr: false,
  },
);

export default function Home() {
  const [scrollDown, setScrollDown] = useState<boolean>(false);
  const handleScrollDown = () => setScrollDown(true);
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const handleScroll = () => {
    scroll.scrollMore(window.innerHeight, { smooth: "easeInOutCubic" });
  };
  useEffect(() => {
    handleScroll();
  }, []);

  const [skipAnimation, setSkipAnimation] = useState<boolean>(false);
  const handleSkipAnimation = () => {
    setSkipAnimation(true);
    handleScrollDown();
  }


  return (
    <main className="min-h-screen min-w-full flex-grow scroll-snap" onClick={handleSkipAnimation}>
      <section className="min-h-screen flex flex-col flex-grow text-center justify-center items-center relative text-lg md:text-2xl">
        <div className={skipAnimation ? "hidden" : "inline-block"}>
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString(
                  "Onde a criatividade e o tecnicismo dão um passo em direção ao <span class='underline'>futuro</span>.",
                )
                .pauseFor(500)
                .callFunction(() => {
                  handleScrollDown();
                })
                .start();
            }}
          />
        </div>
        <p className={skipAnimation ? "inline-block" : "hidden"}>
          Onde a criatividade e o tecnicismo dão um passo em direção ao <span className="underline">futuro</span>.
        </p>
        <div
          className={(scrollDown
            ? "toggleScrollDownOn"
            : "toggleScrollDownOff") + " absolute bottom-8 md:bottom-8"}
        >
          <ScrollButton value={48} />
        </div>
      </section>
      <section
        className={(scrollDown ? "block" : "hidden") +
          " min-h-screen relative flex flex-col flex-grow justify-center items-center"}
      >
        <h1 className="font-black block text-left absolute top-2 w-full text-2xl md:text-4xl">
          Quem sou eu?
        </h1>
        <p className="md:mx-16 md:text-2xl w-[60ch]">
          Meu nome é Bruno Barreto, mas as pessoas me conhecem como Mirai. Eu
          tenho {currentYear - 2005}{" "}
          anos, e sou principalmente um desenvolvedor Full-Stack; embora também
          faça produção musical, design e escrita como hobbies.
        </p>
        <div
          className={(scrollDown
            ? "toggleScrollDownOn"
            : "toggleScrollDownOff") +
            " absolute bottom-32 md:bottom-16 md:block hidden"}
        >
          <ScrollButton value={16} />
        </div>

        <div
          className={(scrollDown
            ? "toggleScrollDownOn"
            : "toggleScrollDownOff") +
            " absolute bottom-32 md:bottom-8 block md:hidden"}
        >
          <ScrollButton value={-52} />
        </div>
      </section>
      <section
        className={(scrollDown ? "block" : "hidden") +
          " min-h-screen relative flex flex-col flex-grow justify-center items-center"}
      >
        <h1 className="font-black block text-left absolute top-2 w-full text-2xl md:text-4xl">
          Recomendações
        </h1>
        <p className="text-center md:text-2xl">
          Porquê você não dá uma olhada nas outras seções do site? <br />
          <br />
          <span className="hidden md:inline-block text-neutral-500 dark:text-neutral-400">
            Basta usar o menu superior
          </span>
          <span className="inline-block md:hidden text-neutral-500 dark:text-neutral-400">
            basta usar o menu no canto superior-direito da tela
          </span>
        </p>
      </section>
    </main>
  );
}
