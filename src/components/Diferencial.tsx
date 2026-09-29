import Reveal from "./Reveal";
import content from "../data/content.json";
import { assetPath } from "../lib/assetPath";

export default function Diferencial() {
  const { titulo, texto, formacao, imagem } = content.diferencial;

  return (
    <section id="diferencial" className="bg-azul py-24 text-branco">
      <Reveal className="mx-auto grid max-w-6xl items-center gap-14 px-6 md:grid-cols-[0.85fr_1.15fr]">
        <div className="relative mx-auto w-full max-w-xs">
          {/* IMAGEM: foto secundária / atendimento */}
          <img
            src={assetPath(imagem)}
            alt="Jamili Naely Ferreira em atendimento"
            className="aspect-[3/4] w-full rounded-[2rem] object-cover"
          />
          <div className="absolute -bottom-4 -right-4 h-full w-full -z-10 rounded-[2rem] border border-dourado-claro/40" />
        </div>

        <div>
          <h2 className="font-display text-3xl leading-tight md:text-4xl">{titulo}</h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-branco/85">{texto}</p>
          <p className="mt-6 border-l border-dourado-escuro pl-5 text-sm leading-relaxed text-dourado-claro">
            {formacao}
          </p>
        </div>
      </Reveal>
    </section>
  );
}
