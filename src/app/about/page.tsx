"use client";
import Image from 'next/image';

export default function About() {
  const imgSize: number = 128;
  const currentYear: number = new Date().getFullYear();
  const endingYear: number = 2026;
  return (
    <main className="min-h-screen min-w-full flex-grow flex flex-row justify-center items-start">
      <article className="w-[40ch] md:w-[80ch]">
        <section className="my-2 md:my-4">
          <h1 className="font-black text-xl mb-2">Quem sou eu?</h1>
          <div className="flex flex-row justify-center items-center">
            <Image 
              className="rounded-full border-2 border-neutral-950 dark:border-neutral-50 mr-4 aspect-square"
              src="/Selfie.png"
              width={imgSize}
              height={imgSize}
              alt="Foto do autor"
            />
            <p>
            Meu nome é Bruno Barreto, mas as pessoas me conhecem como Mirai. Eu tenho {currentYear - 2005} anos, e sou principalmente um desenvolvedor Full-Stack; embora também faça produção musical, design e escrita como hobbies.
            </p>
          </div>
        </section>
        <section className="my-2 md:my-4">
          <h1 className="font-black text-xl mb-2">Porquê você se chama Mirai?</h1>
          <div className="flex flex-row justify-between items-center">
            <p>
              Mirai é o alter-ego criado por mim aos 16 anos para retornar com produção musical, inspirado no fato de amigos dizerem que &quot;sou o futuro&quot;, foi durante a produção de uma música com temática japonêsa e significa &quot;Futuro&quot;.
            </p>
          </div>
        </section>
        <section className="my-2 md:my-4">
          <h1 className="font-black text-xl mb-2">Formações</h1>
          <div>
            <div className="flex flex-row justify-between items-center">
              <p>UERJ: Tec. Análise e Desenvolvimento de Sistemas</p>
              <p className="text-sm text-neutral-200 dark:neutral-800">{`(2023 - ${currentYear == endingYear ? "Atualidade" : endingYear.toString()})`}</p>
            </div>
            <div className="flex flex-row justify-between items-center">
              <p>Colégio Estadual Círculo Operário</p>
              <p className="text-sm text-neutral-200 dark:neutral-800">(2021 - 2022)</p>
            </div>
            <div className="flex flex-row justify-between items-center">
              <p>Centro de Formação Nogueira Mineiro</p>
              <p className="text-sm text-neutral-200 dark:neutral-800">(2020)</p>
            </div>
            <div className="flex flex-row justify-between items-center">
              <p>Instituto PROA</p>
              <p className="text-sm text-neutral-200 dark:neutral-800">(08/2022  - 11/2022)</p>
            </div>
            <div className="flex flex-row justify-between items-center">
              <p>RocketSeat Discover</p>
              <p className="text-sm text-neutral-200 dark:neutral-800">09/2022</p>
            </div>
          </div>
        </section>
      </article>
    </main>
  );
}
