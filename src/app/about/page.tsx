"use client";
import Image from 'next/image';

export default function About() {
  const imgSize: number = 128;
  return (
    <main className="min-h-screen min-w-full flex-grow flex flex-row justify-center items-start">
      <article className="w-[40ch] md:w-[80ch]">
        <section className="my-2 md:my-4">
          <h1 className="font-black text-xl">Quem sou eu?</h1>
          <div className="flex flex-row justify-center items-center">
            <Image 
              className="rounded-full border-2 border-neutral-950 dark:border-neutral-50 mr-4"
              src="https://raw.githubusercontent.com/MiraiMindz/MiraiMindz.github.io/main/public/assets/selfie.png"
              width={imgSize}
              height={imgSize}
              alt="Foto do autor"
            />
            <p>
              (apresentação)
            </p>
          </div>
        </section>
        <section className="my-2 md:my-4">
          <h1 className="font-black text-xl">Formações</h1>
          <div className="flex flex-row justify-between items-center">
            <p>
              (Formações Academicas)
            </p>
          </div>
        </section>
        <section className="my-2 md:my-4">
          <h1 className="font-black text-xl">Formas de Contato</h1>
          <div className="flex flex-row justify-between items-center">
            <p>
              (Formas de Contato)
            </p>
          </div>
        </section>
      </article>
    </main>
  );
}
