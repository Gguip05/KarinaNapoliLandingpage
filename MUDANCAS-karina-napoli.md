# MUDANCAS.md — Karina Napóli Advogados

> Origem: sessão de feedback com "sogra tester". Itens organizados por área, com decisões já fechadas e o que ainda está em aberto.
> Uso: instruir Claude Code a aplicar essas mudanças de forma cirúrgica sobre o site existente (https://project-lc61i.vercel.app/), sem reescrever arquivos ou renomear classes já existentes.

---

## 1. Paleta de cores — ATUALIZAÇÃO

Remover azul completamente. Nova base:

| Token | Cor | Uso |
|---|---|---|
| `--bg-main` | Cinza médio-claro (ex: `#5A5A5A` a `#6B6B6B` — testar 2-3 variações no código) | Fundo principal, cor única e sólida em toda a página |
| `--card-bg` | Branco `#FFFFFF` | Cards de depoimento, e testar também nos cards de área de atuação |
| `--card-bg-alt` | Cinza escuro (ex: `#2A2A2A`) | Alternativa a testar para cards de área de atuação — **decisão pendente, subir as duas versões lado a lado para escolha visual** |
| `--gray-dark` | `#2A2A2A` | Textos, detalhes, contraste sobre o fundo |
| `--gray-light` | `#9A9A9A` | Textos secundários sobre o fundo |
| `--gold` | `#F2B705` (manter o existente) | Único acento de cor: linha decorativa, citação em destaque, hover, ícones pontuais |
| ~~Navy/Azul~~ | Removido | Substituir todas as ocorrências |

⚠️ Ação: buscar e remover TODAS as ocorrências de azul no CSS (`--navy-900`, `--royal-500`, etc.) e nas imagens/decorações que dependem dessa cor.

---

## 2. Decoração e fundo

- Remover pontos/dots decorativos do fundo (efeito atual de partículas ou bolinhas)
- Trocar decorações curvas por elementos **retos/angulares** (linhas retas, bordas quadradas em vez de curvas suaves)
- Fotos: testar composição com um card sobrepondo levemente a borda da foto (efeito de "invasão" sutil, não cobrir o rosto)

---

## 3. Favicon

- Trocar para **apenas a águia** do logo (remover texto/monograma do favicon atual)

---

## 4. Estrutura de conteúdo (dentro da mesma seção, sem virar multi-página ainda* — ver item 7)

- **Seção "advocacia que educa e protege"**: remover a foto atual dessa seção específica e substituir por mais texto/informação
- **Citação de destaque**: adicionar em local de destaque (ex: logo abaixo do hero ou antes do rodapé):
  > "O direito existe para quem é persistente."
  > — Karina Napóli
- **Bloco de história**: adicionar logo após o header — tempo de mercado / trajetória da advogada
- **Página/seção Sobre**: incluir menção à **tradição no direito**
- **Depoimentos**: nova seção com opiniões de clientes em cards estilo Google Maps (estrela, nome, comentário curto)

---

## 5. Áreas de atuação — botões e redirecionamento

Trocar texto do botão (hoje "Saiba mais") — **testar as duas opções**:
- "Entre em contato"
- "Fale com o escritório"

Cada card de área de atuação vira um botão/link que redireciona para a publicação correspondente no Instagram. Links de teste fornecidos (associar 1 a cada área, mesmo que a categoria não bata perfeitamente — é só para validar o comportamento):

1. `https://www.instagram.com/p/DZVb6u3xHnd/`
2. `https://www.instagram.com/p/DaV6LTcGHap/`
3. `https://www.instagram.com/p/DZ-22b6hetA/`

⚠️ Abrir em nova aba (`target="_blank"`). Pendente: mapear qual link vai em qual área definitiva e completar os links faltantes.

---

## 6. Footer

Sem alterações — aprovado como está ✅

---

## 7. Estrutura multi-página (mudança maior — priorizar por último)

Migrar de single-page para páginas separadas:

| Página | Foco |
|---|---|
| **Home** | Header forte + elementos de confiança + tópicos que geram credibilidade + CTA grande para contato |
| **Sobre** | História, tempo de mercado, tradição no direito |
| **Localização** | Endereço / mapa |
| **Contato** | Botão "Fale conosco" dedicado |

---

## Ordem de execução sugerida

1. Paleta de cores (base de tudo o resto)
2. Decoração — remover pontos, deixar retilíneo
3. Conteúdo — citação, história, seção "educa e protege", depoimentos
4. Botões de área de atuação + links do Instagram (teste)
5. Favicon
6. Estrutura multi-página (maior escopo, por último)

## Pendências para fechar antes da execução completa
- [ ] Escolher entre card branco ou cinza escuro nas áreas de atuação (subir as duas opções)
- [ ] Escolher entre "Entre em contato" ou "Fale com o escritório"
- [ ] Mapear os 3 links de Instagram enviados às áreas de atuação corretas (e completar os que faltam)
- [ ] Confirmar tom exato do cinza de fundo principal (testar variações)
