# Landing Page — Jamili Naely Ferreira | Psicóloga

Landing page em página única (React + Vite + Tailwind CSS), com navbar fixa,
animações leves ao rolar (framer-motion) e botão flutuante de WhatsApp.

## Stack

- React 19 + TypeScript + Vite
- Tailwind CSS v4
- framer-motion (animações de entrada ao rolar a página)
- react-icons (ícones do WhatsApp, Instagram e e-mail)

## Como executar

Pré-requisito: [Node.js](https://nodejs.org/) 18 ou superior instalado.

```bash
# 1. Entrar na pasta do projeto
cd psiJamili

# 2. Instalar as dependências
npm install

# 3. Rodar em modo desenvolvimento
npm run dev
```

O terminal vai mostrar um endereço local (geralmente `http://localhost:5173`).
Abra esse endereço no navegador.

### Gerar versão de produção

```bash
npm run build
```

Os arquivos finais (prontos para hospedar em qualquer serviço estático —
Vercel, Netlify, Hostinger etc.) ficam na pasta `dist/`.

Para conferir o resultado do build localmente antes de publicar:

```bash
npm run preview
```
Para subir:

```bash
npm run deploy
```

## Onde editar os textos

**Todo o conteúdo textual do site fica em um único arquivo:**

```
src/data/content.json
```

Basta abrir esse arquivo, alterar o texto desejado (nome, textos das seções,
perguntas do FAQ, links de contato etc.) e salvar. A página é atualizada
automaticamente — não é necessário mexer em nenhum componente `.tsx`.

## Estrutura do projeto

```
src/
  data/
    content.json        → todos os textos do site (editar aqui)
  components/
    Navbar.tsx           → menu fixo com links âncora
    Hero.tsx              → seção inicial
    Diferencial.tsx       → seção "Qual meu diferencial?"
    Atendimento.tsx       → seção "Como serão nossos encontros?"
    Faq.tsx                → perguntas frequentes (lista simples)
    Contato.tsx            → seção final + rodapé (WhatsApp, Instagram, e-mail)
    WhatsAppButton.tsx     → botão flutuante fixo, sempre visível
    Reveal.tsx              → wrapper de animação (fade + slide ao entrar na tela)
public/
  images/                → imagens do site (placeholders inclusos)
```