# Kritisk læring

Interaktivt nettverktøy som lærer folk å tenke kritisk om KI-svar — ikke ved å forklare konseptet, men ved å la dem oppleve forskjellen selv.

**Live:** [knyttneven.github.io/kritisk-laering](https://knyttneven.github.io/kritisk-laering/)

---

## Konsept

KI svarer alltid. Men svaret avhenger fullstendig av konteksten du gir. Uten instruksjoner gjetter KI seg frem til det mest behagelige svaret — ikke det mest presise.

Verktøyet illustrerer tre mekanismer:

- **Tone maskerer** — svaret høres bra ut men inneholder ingen reell informasjon
- **Skjult antakelse** — KI bekrefter premisser i spørsmålet uten å stille spørsmål ved dem
- **Usynlig brukerantagelse** — KI antar hvem du er uten å si det

## Brukerflyt

1. Se to KI-svar side om side på samme spørsmål — ett uten og ett med instruksjoner
2. Velg kontekst (Utdanning / Teknisk / Generelt)
3. Skru på instruksjoner med 6 bryterne
4. Kopier ferdig instrukstekst til Claude, ChatGPT eller Copilot

## Tech-stack

- Next.js 14+ (App Router), TypeScript
- Tailwind CSS + shadcn/ui
- Statisk eksport, hostet på GitHub Pages

## Utvikling

```bash
npm install
npm run dev
```

Åpne [localhost:3000](http://localhost:3000). Alt innhold ligger i `src/content/`.

## Pedagogisk forankring

Forankret i Udirs overordnet del 1.3 (kritisk tenkning og etisk bevissthet) og rammeverket for digital dømmekraft.
