import Reveal from "./Reveal";
import content from "../data/content.json";
import { assetPath } from "../lib/assetPath";

export default function Atendimento() {
  const { titulo, texto, imagem } = content.atendimento;

  return (
    <section id="atendimento" className="bg-branco py-24">
      <Reveal className="mx-auto grid max-w-6xl items-center gap-14 px-6 md:grid-cols-[1.15fr_0.85fr]">
        <div>
          <h2 className="font-display text-3xl leading-tight text-azul md:text-4xl">{titulo}</h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-azul/80">{texto}</p>

          <dl className="mt-10 grid max-w-md grid-cols-2 gap-6 border-t border-azul/10 pt-6">
            <div>
              <dt className="text-sm text-azul/60">Formato</dt>
              <dd className="mt-1 font-display text-lg text-azul">Videochamada</dd>
            </div>
            <div>
              <dt className="text-sm text-azul/60">Duração</dt>
              <dd className="mt-1 font-display text-lg text-azul">50 minutos</dd>
            </div>
          </dl>
        </div>

        <div className="relative mx-auto w-full max-w-xs">
          {/* IMAGEM: sessão online / videochamada */}
          <img
            src={assetPath(imagem)}
            alt="Sessão de terapia online por videochamada"
            className="aspect-square w-full rounded-[2rem] object-cover"
          />
          <div className="absolute -left-4 -top-4 -z-10 h-full w-full rounded-[2rem] bg-dourado-claro/60" />
        </div>
      </Reveal>
    </section>
  );
}
