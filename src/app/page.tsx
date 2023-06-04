"use client";

import Typewriter from "typewriter-effect";

export default function Home() {
  return (
    <main className="min-h-screen min-w-full flex-grow">
      <section className="min-h-screen flex flex-col flex-grow text-center justify-center items-center">
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
      </section>
      <section className="min-h-screen">
        <h1>Section 02</h1>
      </section>
      <section className="min-h-screen">
        <h1>Section 03</h1>
      </section>
    </main>
  );
}
