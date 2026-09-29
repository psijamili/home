import Reveal from "./Reveal";
import content from "../data/content.json";

export default function Faq() {
  const { titulo, perguntas } = content.faq;

  return (
    <section id="faq" className="bg-dourado-claro/30 py-24">
      <Reveal className="mx-auto max-w-3xl px-6">
        <h2 className="font-display text-3xl leading-tight text-azul md:text-4xl">{titulo}</h2>

        <div className="mt-10 divide-y divide-azul/10">
          {perguntas.map((item) => (
            <div key={item.pergunta} className="py-6">
              <h3 className="font-display text-lg text-azul">{item.pergunta}</h3>
              <p className="mt-3 text-sm leading-relaxed text-azul/75">{item.resposta}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
