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
- [x] Cards de áreas de atuação: **cinza escuro** (decidido — `--card-bg-alt #2A2A2A`, já aplicado nos 6 cards e nos 3 blocos de "Como posso lhe ajudar?")
- [ ] Escolher entre "Entre em contato" ou "Fale com o escritório"
- [ ] Mapear os 3 links de Instagram enviados às áreas de atuação corretas (e completar os que faltam)
- [ ] Confirmar tom exato do cinza de fundo principal (testar variações)

---

## 8. Rascunho em papel enviado pela Karina (21/07) — página inicial

> Origem: foto de um wireframe desenhado à mão pela Karina para a home. Comparado com o que já existe hoje.

Itens já batem com o site atual e não precisam de mudança:
- Header com logo + menu
- Citação de destaque logo após o hero (mantida como está: "O direito existe para quem é persistente.")
- CTA final "Seu próximo passo começa com uma conversa" — texto já é idêntico ao existente

Itens aplicados nesta rodada:
- [x] Bloco de números: "+X anos" → **"+20 anos"**, conforme rascunho
- [x] Bloco de números: caption do segundo número ajustada para "em todo o Brasil"

Pendente de confirmação com a Karina antes de publicar:
- [ ] **O que o "+10 mil" representa** (clientes atendidos? processos? outra métrica?) — está no ar como placeholder no bloco de números
- [ ] **Seção "Como posso lhe ajudar?"** do rascunho mostra 3 blocos empilhados (tamanhos crescentes), diferente da grade atual de 6 cards de áreas de atuação. Duas abordagens possíveis, a validar com ela:
  1. Adicionar uma seção nova "Como posso lhe ajudar?" com 3 categorias amplas (ex.: Pessoa Física / Família / Empresa) como um bloco de entrada, mantendo os 6 cards detalhados logo depois
  2. Consolidar as 6 áreas atuais em apenas 3 blocos maiores, substituindo a grade existente
  - Nenhuma das duas foi implementada ainda — aguardando decisão dela sobre qual caminho seguir e quais seriam as 3 categorias
