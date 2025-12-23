import saganImg from '../assets/images/sagan.jpg';

export default function Curiosidades() {
  return (
    <section className="space-y-4">

      <figure className="flex flex-col items-center gap-3">
        <img
          src={saganImg}
          alt="Carl Sagan em cenário com modelos de planetas"
          className="w-full max-w-xl rounded-lg shadow object-cover"
          loading="lazy"
        />

      </figure>

      <h1 className="text-2xl font-bold text-gray-900"><center>10 Curiosidades sobre Sagan</center></h1>

      <ul className="list-disc pl-6 text-gray-700">
        <li>  Criou o termo “Pálido Ponto Azul”</li>
        Inspirado pela foto da Terra tirada pela Voyager 1 a 6 bilhões de km, Sagan cunhou a expressão para refletir sobre a fragilidade do nosso planeta.
        <li>  Consultor científico em Hollywood</li>
        Foi consultor em filmes e séries, incluindo o filme Contato, baseado em seu próprio livro.
        <li>  Defendeu a exploração espacial como sobrevivência</li>
        Acreditava que a humanidade deveria se tornar uma espécie multiplanetária para garantir sua sobrevivência.
        <li>  Participou da criação do calendário cósmico</li>
        Uma analogia famosa que condensa a história do universo em um único ano para facilitar a compreensão.
        <li>  Foi professor em Cornell University</li>
        Lá formou e inspirou diversos cientistas e divulgadores, incluindo Neil deGrasse Tyson.
        <li>  Alertou sobre mudanças climáticas</li>
        Já nos anos 80, Sagan chamava atenção para o efeito estufa e seus riscos para a Terra.
        <li>  Defendeu o ceticismo científico</li>
        Considerava o pensamento crítico essencial para combater superstições e pseudociência.
        <li>  Participou do projeto SETI e da mensagem Arecibo</li>
        Além do SETI, ajudou a enviar sinais para possíveis civilizações extraterrestres.
        <li>   Foi um dos primeiros a estudar atmosferas planetárias</li>
        Suas pesquisas ajudaram a entender o clima de Vênus e Marte.
        <li>  Popularizou a frase “Bilhões e bilhões”</li>
        Embora nunca tenha usado exatamente essa expressão em Cosmos, ela se tornou associada a ele como símbolo da vastidão do universo.
      </ul>
    </section>
  );
}
