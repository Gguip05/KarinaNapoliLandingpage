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