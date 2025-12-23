import carlSaganImg from '../assets/images/carl-sagan.jpg';
import cosmosImg from '../assets/images/cosmos1.jpg';
import carlImg from '../assets/images/carl1.jpg';
import livrosImg from '../assets/images/livros.jpeg';
export default function Home() {
  return (



    <section className="space-y-6">

      <figure className="flex flex-col items-center gap-3">
        <img
          src={carlSaganImg}
          alt="Carl Sagan em cenário com modelos de planetas"
          className="w-full max-w-xl rounded-lg shadow object-cover"
          loading="lazy"
        />

      </figure>


      <h1 className="text-3xl font-bold text-gray-900"><center>Bem-vindo! S2</center></h1>
      <p className="text-gray-700">
        Este é um site dedicado a Carl Sagan, um dos mais influentes cientistas e divulgadores científicos do século XX.
        Aqui você encontrará curiosidades sobre sua vida, seus principais livros e informações sobre a série "Cosmos",
        que revolucionou a forma como entendemos o universo.



      </p>


      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 rounded-lg border bg-white shadow-sm">
          <figure className="flex flex-col items-center gap-3">
            <img
              src={carlImg}
              alt="Carl Sagan imagem clássica"
              className="w-full max-w-xl rounded-lg shadow object-cover"
              loading="lazy"
            />

          </figure>

          <h2 className="font-semibold text-gray-800"><center>Quem foi Carl Sagan?</center></h2>
          <p className="text-sm text-gray-600"><br />Carl Sagan foi um astrônomo, astrofísico, cosmólogo, escritor e divulgador
            científico norte-americano, amplamente reconhecido por popularizar a ciência e o pensamento crítico.</p>



        </div>
        <div className="p-4 rounded-lg border bg-white shadow-sm">

          <figure className="flex flex-col items-center gap-3">
            <img
              src={livrosImg}
              alt="Principais livros de Carl Sagan"
              className="w-full max-w-xl rounded-lg shadow object-cover"
              loading="lazy"
            />

          </figure>
          <h2 className="font-semibold text-gray-800"><center>Principais Livros</center></h2>
          <p className="text-sm text-gray-600"><br />Cosmos (1980)<br />
            Baseado na famosa série de TV, explora a história do universo, da vida e da ciência.
            <br />
            <br />
            Contato (Contact) (1985)<br />
            Romance sobre o primeiro contato da humanidade com uma civilização extraterrestre (adaptado para filme em 1997).
            <br />
            <br />
            O Mundo Assombrado pelos Demônios (The Demon-Haunted World) (1995)<br />
            Defesa do pensamento crítico e da ciência contra a pseudociência.
            <br />
            <br />
            Os Dragões do Éden (The Dragons of Eden) (1977)<br />
            Reflexões sobre a evolução da inteligência humana (ganhou o Prêmio Pulitzer).
            <br />
            <br />
            Pálido Ponto Azul (Pale Blue Dot) (1994)<br />
            Reflexão sobre a fragilidade da Terra e a importância da exploração espacial.
            <br />
            <br />
            Bilhões e Bilhões (Billions and Billions) (1997)<br />
            Último livro publicado antes de sua morte, aborda temas como vida, morte e meio ambiente.</p>
        </div>
        <div className="p-4 rounded-lg border bg-white shadow-sm">

          <figure className="flex flex-col items-center gap-3">
            <img
              src={cosmosImg}
              alt="Abertura da série Cosmos"
              className="w-full max-w-xl rounded-lg shadow object-cover"
              loading="lazy"
            />

            <h2 className="font-semibold text-gray-800">Sobre a série Cosmos</h2>
            <p className="text-sm text-gray-600"><br />Criada em 1980 por Carl Sagan, "Cosmos" é uma das produções mais influentes da história da divulgação científica.
              Exibida em mais de 60 países, Cosmos, série-documentário tem como objetivo explicar conceitos complexos de astronomia, física,
              biologia e história da ciência de forma acessível e didática.</p>

            <br />


          </figure>
        </div>
      </div>
    </section>
  );
}
