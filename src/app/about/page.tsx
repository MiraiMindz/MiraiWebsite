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
          <h1 className="font-black text-xl">Quem sou eu?</h1>
          <div className="flex flex-row justify-center items-center">
            <Image 
              className="rounded-full border-2 border-neutral-950 dark:border-neutral-50 mr-4 aspect-square"
              src="/Selfie.png"
              width={imgSize}
              height={imgSize}
              alt="Foto do autor"
            />
            <p>
            Meu nome é Bruno Barreto, mas as pessoas me conhecem como Mirai. Eu
            tenho {currentYear - 2005}{" "}
            anos, e sou principalmente um desenvolvedor Full-Stack; embora também
            faça produção musical, design e escrita como hobbies.
            </p>
          </div>
        </section>
        <section className="my-2 md:my-4">
          <h1 className="font-black text-xl">Porquê você se chama Mirai?</h1>
          <div className="flex flex-row justify-between items-center">
            <p>
              Mirai é o alter-ego criado por mim aos 16 anos para retornar com produção musical, inspirado no fato de amigos dizerem que "sou o futuro", foi durante a produção de uma música com temática japonêsa e significa "Futuro".
            </p>
          </div>
        </section>
        <section className="my-2 md:my-4">
          <h1 className="font-black text-xl">Formações</h1>
          <div className="flex flex-row justify-between items-center">
            <div>
              <p>UERJ -Tec. Análise e Desenvolvimento de Sistemas</p>
              <p>{`(2023 - ${currentYear == endingYear ? "Atualidade" : endingYear.toString()})`}</p>
            </div>
            <div>
              <p>Colégio Estadual Círculo Operário</p>
              <p>(2021 - 2022)</p>
            </div>
            <div>
              <p>Centro de Formação Nogueira Mineiro</p>
              <p>(2020)</p>
            </div>
            <div>
              <p>Instituto PROA</p>
              <p>(08/2022  - 11/2022)</p>
            </div>
            <div>
              <p>RocketSeat Discover</p>
              <p>09/2022</p>
            </div>
          </div>
        </section>
      </article>
    </main>
  );
}
