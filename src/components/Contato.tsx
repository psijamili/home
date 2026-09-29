import { FaWhatsapp, FaInstagram, FaEnvelope } from "react-icons/fa";
import Reveal from "./Reveal";
import content from "../data/content.json";

export default function Contato() {
  const { titulo, texto, whatsapp, instagram, email, git } = content.contato;
  const { nome, crp } = content.profissional;
  const currentYear: number = new Date().getFullYear();

  return (
    <section id="contato" className="bg-azul py-24 text-branco">
      <Reveal className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="font-display text-3xl leading-tight md:text-4xl">{titulo}</h2>
        <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-branco/80">{texto}</p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={whatsapp.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-dourado-escuro px-7 py-3 text-sm text-azul transition-opacity hover:opacity-90"
          >
            <FaWhatsapp size={18} />
            {whatsapp.label}
          </a>
          <a
            href={instagram.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-branco/30 px-7 py-3 text-sm text-branco transition-colors hover:border-branco"
          >
            <FaInstagram size={18} />
            {instagram.label}
          </a>
          <a
            href={`mailto:${email}`}
            className="inline-flex items-center gap-2 rounded-full border border-branco/30 px-7 py-3 text-sm text-branco transition-colors hover:border-branco"
          >
            <FaEnvelope size={16} />
            {email}
          </a>
        </div>
      </Reveal>

      <div className="mx-auto mt-20 max-w-6xl border-t border-branco/10 px-6 pt-8 text-center text-xs text-branco/50">
        <p>
          {nome} — {crp}
        </p>
        <p className="mt-1">{content.footer.texto}</p>
      </div>

      <div className="mx-auto mt-10 max-w-6xl border-t border-branco/10 px-6 pt-8 text-center text-xs text-branco/50">
        <p className="font-mono text-sm text-muted-foreground">
          {"<"} Desenvolvido com{" "}
          <span className="text-primary">♥ por </span> 
          
          <a
            href={git}
            target="_blank"
            rel=""
          >
            Pedro Venâncio
          </a>{"/>"}
        </p>
        <p className="text-xs text-muted-foreground/50 mt-2">
          © {currentYear} — Todos os direitos reservados
        </p>
      </div>
    </section>
  );
}
