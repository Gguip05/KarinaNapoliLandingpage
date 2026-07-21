# Karina Napoli Advogados — Site institucional

Site estático (HTML + CSS + JS puro) hospedado na Vercel.

## Estrutura de pastas

```
.
├── index.html              # Home
├── sobre.html              # Página Sobre
├── contato.html            # Página Contato
├── localizacao.html        # Página Localização
├── robots.txt
├── sitemap.xml
├── vercel.json             # Config de rotas/clean URLs da Vercel
├── assets/
│   ├── css/
│   │   └── styles.css      # Todo o CSS do site
│   ├── js/
│   │   └── script.js       # Todo o JS do site (menu, cookie banner, reveal on scroll etc.)
│   └── images/
│       ├── logo-branca-transparente.png
│       ├── logosemfundo.png
│       ├── karina-napoli-foto.png   # foto da Dra. Karina usada no hero
│       └── favicons/
│           ├── favicon.ico
│           ├── favicon-16x16.png
│           ├── favicon-32x32.png
│           ├── favicon-192.png
│           ├── favicon-512.png
│           └── apple-touch-icon.png
└── docs/
    ├── MUDANCAS-karina-napoli.md   # Histórico de decisões e pendências de design/conteúdo
    └── designteste.md              # Referência visual original extraída do feed/logo
```

As páginas HTML ficam na raiz (não em uma subpasta) para manter URLs limpas
(`/sobre`, `/contato`, `/localizacao`) via `cleanUrls` no `vercel.json`.

## Convenções

- Um único `styles.css` e um único `script.js`, compartilhados por todas as páginas
  (nada de CSS/JS inline duplicado por página).
- Imagens de conteúdo em `assets/images/`, favicons isolados em `assets/images/favicons/`
  para não poluir a pasta principal de imagens.
- Documentos de processo (decisões de design, pendências) ficam em `docs/`, separados
  dos arquivos que de fato vão para produção.

## Rodando localmente

```bash
python3 -m http.server 8000
# depois abrir http://localhost:8000
```
