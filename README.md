
# React + Tailwind CSS + React Router

Projeto de exemplo com 3 páginas: **Início**, **Curiosidades**.

## Requisitos
- Node.js (LTS) e npm ou pnpm.

## Instalação e execução
```bash
npm install
npm run dev
```
Abra o endereço mostrado no terminal (geralmente `http://localhost:5173`).

## Build de produção
```bash
npm run build
npm run preview
```

## Estrutura
- `src/pages/` — componentes de página
- `src/components/` — componentes compartilhados (Navbar)
- `tailwind.config.js` e `postcss.config.js` — configuração do Tailwind
- `src/index.css` — inclui diretivas do Tailwind

## Observações
- Este template já vem pronto para uso do Tailwind (não é necessário rodar `npx tailwindcss init`).
- A navegação usa `react-router-dom@6` com `BrowserRouter`.
