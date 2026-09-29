import { FaWhatsapp } from "react-icons/fa";
import content from "../data/content.json";

export default function WhatsAppButton() {
  const { link } = content.contato.whatsapp;

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-branco shadow-lg shadow-azul/20 transition-transform hover:scale-105"
    >
      <FaWhatsapp size={28} />
    </a>
  );
}
