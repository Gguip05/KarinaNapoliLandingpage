# DESIGN.md — Karina Napóli Advogados (Site Teste)

> Referência visual extraída do logo + feed Instagram da cliente.
> Uso: alimentar Claude Code na construção de landing page / site institucional.

---

## 1. Identidade da marca

- **Nome:** Karina Napóli Advogados
- **Símbolo:** fênix/ave estilizada em traços fluidos (branca sobre azul, dourada sobre claro)
- **Posicionamento:** advocacia acessível, educativa e protetiva — forte presença feminina
- **Áreas visíveis no feed:** Previdenciário, Trabalhista, Família, Direito da Mulher (Maria da Penha), Consumidor/Imobiliário, Direitos digitais (ECA Digital / Lei Felca)
- **Endereço:** Av. Juscelino Kubitscheck, 410 — Sala 09, Térreo, Bloco B — Centro, Joinville/SC

## 2. Paleta de cores

| Token | Hex (aprox.) | Uso |
|---|---|---|
| `--navy-900` | `#101F4A` | Fundo principal, blocos hero, cards escuros |
| `--navy-700` | `#1B2F6E` | Variação de fundo, gradientes, overlays |
| `--royal-500` | `#2843A1` | Detalhes, gradientes intermediários |
| `--gold-400` | `#F2B705` | CTA, destaques de texto, pins, bordas finas |
| `--gold-300` | `#FFD23F` | Tags/etiquetas amarelas, hover de CTA |
| `--white` | `#FFFFFF` | Texto sobre navy, fundos claros |
| `--off-white` | `#F4F6FA` | Fundos de seções claras, cards |

**Regra de contraste do feed:** navy domina (~70%), branco respira (~20%), dourado pontua (~10%). Dourado NUNCA como fundo grande — só acento.

## 3. Tipografia

Feed usa sans geométrica bold para títulos + serif elegante no logo.

| Papel | Fonte sugerida (Google Fonts) | Peso | Observação |
|---|---|---|---|
| Logo/Display serif | **Cormorant Garamond** ou **Playfair Display** | 500–600 | Replica a serif fina do "Karina Napóli" |
| Headlines | **Poppins** ou **Plus Jakarta Sans** | 700–800 | Caixa alta em frases de impacto ("NEM TODA FAMÍLIA É UM LUGAR SEGURO") |
| Corpo | **DM Sans** ou **Inter** | 400–500 | Texto educativo, parágrafos |
| Tags/labels | mesma do corpo | 600, uppercase, letter-spacing 0.15em | Etiquetas amarelas pequenas |

**Padrão de ênfase:** palavras-chave em **bold dourado ou itálico** dentro da frase (ex.: "Não é **caro** pagar um advogado. **Caro** é descobrir *tarde demais*…").

## 4. Elementos visuais recorrentes

- **Bordas finas douradas** (1px) arredondadas emoldurando cards/fotos
- **Formas orgânicas/pill:** blocos navy com border-radius grande (24–40px), cantos assimétricos
- **Tags amarelas** retangulares pequenas com texto navy bold ("ONDE ESTAMOS", "SAIBA MAIS")
- **Curvas/ondas douradas** decorativas cortando o layout
- **Pin de localização 3D dourado** (identidade do post de endereço)
- **Setas circulares** (→) como CTA em dourado/branco
- **Fotos reais de pessoas** (advogada, clientes, trabalhadores) com overlay navy translúcido
- **Quote marks** grandes para frases de autoridade

## 5. Tom de voz / copy

- Educativo + direto: "Você sabia?", "Já está valendo!", perguntas retóricas
- Frases de impacto curtas em caixa alta
- Cita leis específicas (Lei 14.674/2023, Lei Maria da Penha) → autoridade
- Empoderamento: "Quem não conhece seus direitos, silencia a própria voz e renuncia à justiça."
- CTA padrão: "Saiba mais", "Confira", "Arraste"

## 6. Estrutura sugerida do site teste

```
┌──────────────────────────────────────┐
│ NAVBAR navy · logo serif branco      │
│ links + CTA dourado "Fale conosco"   │
├──────────────────────────────────────┤
│ HERO navy-900                        │
│ Headline impacto caixa alta          │
│ + foto advogada com borda dourada    │
│ + curva dourada decorativa           │
├──────────────────────────────────────┤
│ ÁREAS DE ATUAÇÃO (fundo off-white)   │
│ cards pill com ícone + borda gold    │
├──────────────────────────────────────┤
│ FRASE DE AUTORIDADE (navy, quotes)   │
├──────────────────────────────────────┤
│ SOBRE / "VOCÊ SABIA?" educativo      │
├──────────────────────────────────────┤
│ LOCALIZAÇÃO · pin dourado + mapa     │
│ tag amarela "ONDE ESTAMOS"           │
├──────────────────────────────────────┤
│ CTA FINAL + WhatsApp dourado         │
│ FOOTER navy · OAB · LGPD             │
└──────────────────────────────────────┘
```

## 7. Assinatura visual (elemento memorável)

Curva dourada fluida (eco da fênix do logo) atravessando o hero e reaparecendo como divisor de seções — animada sutilmente no scroll (stroke draw).

## 8. Regras técnicas / compliance

- **OAB Provimento 205/2021:** sem promessa de resultado, sem "o melhor", tom informativo, sem captação ostensiva
- **LGPD:** banner de cookies, política de privacidade, formulário com consentimento explícito
- Botão WhatsApp flutuante (permitido, discreto)
- Responsivo mobile-first (público vem do Instagram)
- Acessibilidade: contraste navy/branco AAA, foco visível

## 9. Não fazer

- Dourado como fundo de seção inteira
- Vermelho/verde/cores fora da paleta
- Fontes condensadas ou "tech"
- Stock photo genérica de martelo/balança clichê (a marca usa pessoas reais)
- Excesso de animação — só a curva assinatura + hovers sutis

# MUDANCAS.md — Site Karina Napóli (rodada de direção visual)

> Origem: feedback da cliente sobre 3 posts do feed (11/06).
> Resumo do pedido: **suave, leve, sofisticado, discreto — nada carregado.**
> Referências: posts 1 e 3 (estilo/cores) + fundo branco e frase do post 2.

---

## Cores extraídas dos posts (substituem a paleta atual)

| Token | Hex | Origem | Uso |
|---|---|---|---|
| `--slate-600` | `#495463` | fundo posts 1 e 3 | Fundo do hero e seções escuras (substitui o navy fechado `#101F4A`) |
| `--navy-quote` | `#1D2255` | faixa da frase post 2 | Faixa da seção de citação, footer |
| `--gold-500` | `#EBC62E` | títulos posts 1 e 3 | Palavras-chave em headlines, acentos |
| `--gold-400` | `#FACA12` | aspas post 2 | Quote marks, micro-destaques |
| `--white-soft` | `#FCFCFC` | fundo post 2 | Fundo claro predominante das seções |

**Regra nova de proporção:** branco suave domina (~60%), slate entra em blocos pontuais (~30%), dourado só pontua (~10%). Inverte a lógica anterior (navy dominante) → site fica leve.

---

## PRIORIDADE ALTA

- [ ] **Hero: trocar fundo navy `#101F4A` → slate `#495463`** (tom dos posts 1 e 3 — mais suave que o navy atual)
- [ ] **Headline do hero no padrão dos posts:** palavra-chave em CAIXA ALTA dourada `#EBC62E` + complemento em branco regular. Ex.: `ADVOCACIA / que educa e protege` (mesma hierarquia de "DIREITO TRABALHISTA / Condutas inadmissíveis...")
- [ ] **Seções claras: trocar `#F4F6FA` → `#FCFCFC`** com textura sutil de luz radial/sedosa (efeito do fundo do post 2 — gradiente radial branco com leves ondas, CSS puro, bem discreto)
- [ ] **Nova seção QUOTE (réplica do post 2):** faixa horizontal `#1D2255` cortando seção clara, aspas grandes douradas `#FACA12` nos cantos opostos, com a frase:
  > **"Não é caro** pagar um advogado. **Caro é** descobrir ***tarde demais*** que precisa de um."
  > Ênfases: "Não é caro" e "Caro é" em bold; "tarde demais" em bold itálico (igual ao post)
- [ ] **WhatsApp real: `5547999003325`** — substituir o placeholder `5547999999999` na variável `WHATS`, no link da navbar e no botão flutuante (número confirmado na legenda do post 3: (47) 99900-3325)

## PRIORIDADE MÉDIA

- [ ] **Reduzir peso visual geral:** menos bordas douradas (manter só em 1–2 elementos-chave), sombras mais leves (`box-shadow` com opacidade menor), espaçamento entre seções maior (respiro)
- [ ] **Cards de áreas:** fundo branco `#FCFCFC`, sem borda dourada por padrão — borda dourada só no hover. Título da área com a palavra-chave dourada (padrão dos posts)
- [ ] **Cards de atendimento:** card navy → slate `#495463`; manter o claro como está
- [ ] **Footer: navy `#1D2255`** (tom da faixa, mais elegante que o slate)
- [ ] **Tipografia das headlines:** manter sans bold, mas reduzir tamanho ~10% e aumentar line-height — leveza

## PRIORIDADE BAIXA

- [ ] Curva dourada assinatura: afinar o traço e reduzir opacidade (~40%) — presente mas discreta
- [ ] Tag amarela ("Atendimento", "Onde estamos"): manter, porém com `#FACA12` e cantos mais arredondados
- [ ] Avaliar segunda frase de quote para rodapé de seção: "Quem entende o valor de um bom profissional não discute honorários." (legenda do post 2 — confirmar com a cliente antes)

---

## NÃO MUDAR

- Estrutura de seções (Início, Áreas, Sobre, Atendimento, Quote, Localização, Contato)
- Cards de atendimento com nome+CPF → WhatsApp (funcionalidade aprovada)
- Compliance OAB 205/2021 + LGPD
- Logo branca sobre escuro / navy sobre claro

## VERIFICAÇÃO PÓS-MUDANÇA

- [ ] Contraste do dourado `#EBC62E` sobre slate `#495463` ≥ 4.5:1 em texto pequeno (se falhar, usar dourado só em texto grande/bold — padrão dos posts)
- [ ] Screenshot mobile + desktop comparado com posts 1 e 3 lado a lado
- [ ] Sensação geral: "leve e discreto" — se alguma seção parecer carregada, remover elemento decorativo dela