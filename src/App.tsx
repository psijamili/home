import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Diferencial from "./components/Diferencial";
import Atendimento from "./components/Atendimento";
import Faq from "./components/Faq";
import Contato from "./components/Contato";
import WhatsAppButton from "./components/WhatsAppButton";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Diferencial />
        <Atendimento />
        <Faq />
        <Contato />
      </main>
      <WhatsAppButton />
    </>
  );
}
