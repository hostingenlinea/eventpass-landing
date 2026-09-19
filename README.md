# EventPass Landing

Landing institucional del ecosistema EventPass. Presenta las soluciones Kids,
EntradaPass y GuardaPass, junto con las funcionalidades que comparten para
organizar eventos, vender entradas y gestionar accesos o pertenencias.

## Comandos disponibles

Instalá las dependencias y levantá el servidor de desarrollo:

```bash
npm install
npm run dev
```

Abrí [http://localhost:3000](http://localhost:3000) para ver la landing.

Para generar el build de producción:

```bash
npm run build
```

También podés iniciar el build generado con:

```bash
npm run start
```

## Stack

- Next.js 16 con App Router
- React 19 y TypeScript
- Tailwind CSS 4

La página principal está en `src/app/page.tsx` y los componentes visuales en
`src/components/`.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.
