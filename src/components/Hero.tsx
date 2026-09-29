import { motion } from "framer-motion";
import content from "../data/content.json";
import { assetPath } from "../lib/assetPath";

export default function Hero() {
  const { saudacao, titulo, texto, frase, cta, imagem } = content.hero;

  return (
    <section id="inicio" className="relative overflow-hidden bg-branco pt-32 pb-24 md:pt-40 md:pb-32">
      {/* Soft background shape — the one deliberate decorative gesture on the page */}
      <div className="pointer-events-none absolute -right-40 -top-24 h-[26rem] w-[26rem] rounded-full bg-dourado-claro/60 blur-3xl" />

      <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 md:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-4 text-sm text-dourado-escuro">{saudacao}</p>
          <h1 className="font-display text-4xl leading-tight text-azul md:text-5xl">
            {titulo}
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-azul/80">
            {texto}
          </p>
          <p className="mt-6 max-w-md font-display text-lg italic leading-snug text-azul/70">
            “{frase}”
          </p>
          <a
            href="#contato"
            className="mt-9 inline-block rounded-full bg-azul px-7 py-3 text-sm text-branco transition-colors hover:bg-dourado-escuro"
          >
            {cta}
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto aspect-[4/5] w-full max-w-sm"
        >
          <div className="absolute -left-4 -top-4 h-full w-full rounded-[2rem] border border-dourado-escuro/40" />
          {/* IMAGEM: foto da psicóloga (retrato) */}
          <img
            src={assetPath(imagem)}
            alt="Retrato de Jamili Naely Ferreira"
            className="relative h-full w-full rounded-[2rem] object-cover shadow-sm"
          />
        </motion.div>
      </div>
    </section>
  );
}
