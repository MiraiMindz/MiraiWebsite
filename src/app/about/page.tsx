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
          <h1 className="font-black text-xl my-2 text-center">Quem sou eu?</h1>
          <p className="my-2">
          Meu nome é Bruno Barreto, mas as pessoas me conhecem como Mirai. Eu tenho {currentYear - 2005} anos, e sou principalmente um desenvolvedor Full-Stack; embora também faça produção musical, design e escrita como hobbies.
          </p>
          <p className="my-2">
            Eu nasci na cidade do Rio de Janeiro, e atualmente resido na mesma. Desde criança sempre tive interesse em criar coisas e quebrar a cabeça para resolver problemas, lembro que foram entre meus 9 e 10 anos que minha jornada &quot;começou&quot;
          </p>
          <h2 className="font-black text-xl my-2">Arte, experimentos e cálculos</h2>
          <p className="my-2">
            Nesse periodo, eu comecei a desenhar, mesmo contendo problemas na coordenação motora, a vontade de me <span className="italic">expressar</span> eram maiores. Enquanto desenhava eu lembro também das tardes que eu passava no computador experimentando com o que eu podia, vendo tutoriais para modificar jogos, ou simplesmente vendo o que aconteceria se eu fizesse algo, como deletar a lixeira por exemplo; eu diria que meu interesse por computadores existe desde sempre.  
          </p>
          <p className="my-2">
            Desde pequeno eu tenho interesse por matemática e lógica em geral, me recordo bem das tardes em que eu pegava o livro de álgebra de meu irmão mais velho e o lia tentando compreender os conteúdos. Se eu não me engano, com meus 6 ou 7 anos, logo após aprender multiplicação e divisão na escola, eu havia aprendido potências e raizes através de um dos livros dele. Bom, não me considero nenhum gênio, mas percebo desde pequeno que eu tenho facilidade em entender coisas desse aspecto.
          </p>
          <p className="my-2">
            O tempo passou, e com 13 anos eu comecei a me interessar por música, como não tinha condições de ter um instrumento, eu comecei como produtor, usando as DAWs (Digital Audio Workspace) para criar. Estudava teoria musical e sound design no tempo vago; confesso que nesse periodo, eu diminui a frequência de desenhos para focar mais em música mesmo. Nesse periodo eu produzia sob o nome &quot;Asthral&quot;, que surgiu depois de uma pequena música que eu fiz, e bom, era melhor que não ter alter-ego nenhum.
          </p>
          <p className="my-2">
            Com 14 anos, através do YouTube eu descobri a existência do Game Maker, e comecei a programar pequenos jogos, sistemas de física, aceleração e colisão, entre outros. Mas confesso que era um hobbie secundário, meu foco continuava sendo produção músical. Porém, pouco antes dos meus 15 anos, eu tive contra-tempos em minha vida pessoal e tive de ficar sem computador, o que impossibilitava a produção de musicas ou de jogos.
          </p>
          <p className="my-2">
            E assim eu segui até meus 16 anos, porém como sempre, parado não fiquei, nesse meio-tempo me mudei para Duque de Caxias, retomei desenho como hobbie e comecei a escrever. Escrevia poemas, narrativas, letras de músicas; eu estudava línguas e filologia para entender como os idiomas foram feitos. Nessa época, textos e línguas eram minha paixão, dominei inglês, aprendi o básico de línguas como francês, russo, espanhol; experimentava com escrita portuguêsa e criava idiomas para o mundo de RPG que eu escrevi no momento. 
          </p>
          <p className="my-2">
            Com 16 anos eu obtive novamente um computador e pude retomar meus estudos em produção musical e programação. Tentei compensar o tempo que fiquei parado, me dedicando integralmente a desenvolvimento, comecei aprendendo Python, e em 6 meses já havia dominado a linguagem; depois, parti para assembly x86 (em especial NASM com sintaxe Intel), depois parti para aprender um pouco de Java, fiz um pequeno servidor local para transferência de dados, apenas para entender a linguagem e o paradigma de orientação a objetos. Resolvi então aprender Go, por ter me interessado na sintaxe da linguagem, atualmente pretendo trabalhar com Go, e tento sempre desenvolver projetos usando ela. Aprendi também desenvolvimento Web, em especial React com Typescript, porém não me considero ter maestria nesses campos (Desenvolvimento Web & Java), apenas aprendi o que precisava para fazer meus projetos.
          </p>
          <h2 className="font-black text-xl mb-2">Porquê você se chama Mirai?</h2>
          <p className="my-2">
            Mirai é o alter-ego criado por mim aos 16 anos para retornar com produção musical, inspirado no fato de amigos dizerem que &quot;sou o futuro&quot;, foi durante a produção de uma música com temática japonêsa e significa &quot;Futuro&quot;.
          </p>
          <h2 className="font-black text-xl mb-2">Atualidade</h2>
          <p className="my-2">
          Após o fim do ensino-médio, eu resolvi cursar um técnologo em desenvolvimento de sistemas pela Universidade Estadual do Rio de Janeiro (UERJ), atualmente eu ando programando bastante na linguagem C por conta da faculdade, e também retomo exporádicamente meus estudos em Java por conta da mesma, porém não pretendo deixar de lado meu objetivo de trabalhar com desenvolvimento em Go.
          </p>
        </section>
        <section className="my-2 md:my-4">
          <h1 className="font-black text-xl my-2">Formações</h1>
          <h2 className="font-black text-xl my-2">Academia</h2>
          <div>
            <div className="flex flex-col justify-start items-start md:flex-row md:justify-between md:items-center">
              <p>UERJ: Tec. Análise e Desenvolvimento de Sistemas</p>
              <p className="text-sm text-neutral-950/60 dark:text-neutral-50/60">{`(2023 - ${currentYear != endingYear ? "Atualidade" : endingYear.toString()})`}</p>
            </div>
            <div className="flex flex-col justify-start items-start md:flex-row md:justify-between md:items-center">
              <p>Colégio Estadual Círculo Operário</p>
              <p className="text-sm text-neutral-950/60 dark:text-neutral-50/60">(2021 - 2022)</p>
            </div>
            <div className="flex flex-col justify-start items-start md:flex-row md:justify-between md:items-center">
              <p>Centro de Formação Nogueira Mineiro</p>
              <p className="text-sm text-neutral-950/60 dark:text-neutral-50/60">(2020)</p>
            </div>
            <h2 className="font-black text-xl my-2">Cursos</h2>
            <div className="flex flex-col justify-start items-start md:flex-row md:justify-between md:items-center">
              <p>Instituto PROA</p>
              <p className="text-sm text-neutral-950/60 dark:text-neutral-50/60">(08/2022  - 11/2022)</p>
            </div>
            <div className="flex flex-col justify-start items-start md:flex-row md:justify-between md:items-center">
              <p>RocketSeat Discover</p>
              <p className="text-sm text-neutral-950/60 dark:text-neutral-50/60">09/2022</p>
            </div>
          </div>
        </section>
      </article>
    </main>
  );
}
