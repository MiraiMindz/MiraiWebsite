"use client";
import Typewriter from "typewriter-effect";
import ScrollButton from "./components/ScrollToButtons/ScrollToButtons";

export default function Home() {
  return (
    <main className="min-h-screen min-w-full flex-grow">
      <section className="min-h-screen flex flex-col flex-grow text-center justify-center items-center relative">
        <Typewriter
          onInit={
            (typewriter) => {
              typewriter
                .typeString("Onde a criatividade e o tecnicismo dão um passo em direção ao <span class='underline'>futuro</span>.")
                .callFunction(() => {
                  console.log('');
                })
              .start();
            }
          }
        />
        <div className="absolute bottom-32 md:bottom-8">
          <ScrollButton />
        </div>
      </section>
      <section className="min-h-screen relative">
        <h1>Section 02</h1>
        <div className="absolute bottom-32 md:bottom-8">
          <ScrollButton />
        </div>
      </section>
      <section className="min-h-screen relative">
        <h1>Section 03</h1>
      </section>
    </main>
  );
}
