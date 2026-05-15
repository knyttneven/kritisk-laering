# CLAUDE.md — Kritisk læring

## Hva dette prosjektet er

Et interaktivt nettverktøy som lærer folk å tenke kritisk om KI-svar — ikke ved å forklare konseptet, men ved å la dem oppleve forskjellen selv.

**Kjernesetningen:** KI svarer alltid. Men svaret avhenger fullstendig av konteksten du gir. Uten instruksjoner gjetter KI seg frem til det mest behagelige svaret.

Dette er ikke et kurs i KI-verktøy. Det er et verktøy for kritisk tenkning — der KI er det mest synlige og presserende eksempelet akkurat nå.

---

## Pedagogisk filosofi (ikke forhandlingsbar)

### Aha-først-prinsippet
Brukeren må oppleve forskjellen FØR de får noen instruksjon eller forklaring. Overbevisning kommer alltid før byggingen. Ingen steg, wizard eller profil skal vises før brukeren har sett aha-øyeblikket.

### Tre mekanismer vi illustrerer
Alle eksempelpar og alt innhold må illustrere minst én av disse tre mekanismene:

1. **Tone maskerer** — KI erstatter faglig analyse med behagelig, varm tone. Svaret høres bra ut men inneholder ingen reell informasjon.
2. **Skjult antakelse** — KI bekrefter en antakelse som ligger bakt inn i spørsmålet, uten å stille spørsmål ved den.
3. **Usynlig brukerantagelse** — KI gjør antakelser om hvem du er (frisk, gjennomsnittlig, uten risikofaktorer) uten å si det.

### Sokrates, ikke RegEx
Vi stiller spørsmål som hjelper brukeren å vurdere selv — vi forteller ikke hva som er feil. Automatisk flagging av fraser er pedagogisk risikabelt fordi det lærer mønstergjenkjenning, ikke kritisk tenkning.

### Faglig forankring
Alle eksempelpar og instruksjonstekster skal kunne forankres i:
- **Udir overordnet del 1.3** — Kritisk tenkning og etisk bevissthet: «elevene må kunne vurdere ulike kunnskapskilder og tenke kritisk om hvordan kunnskap utvikles»
- **Udirs digital dømmekraft** — evne til å reflektere kritisk i møte med KI-teknologi
- **Tre nøkkelspørsmål til enhver kilde:** Hva vet kilden sikkert? Hva antar den? Hva utelater den?

---

## De tre ferdige eksempelparene (kjerneinnhold)

### Eksempel 1 — Tone maskerer
**Spørsmål:** «Kan du gi tilbakemelding på denne elevteksten?»

**Standard-KI (uten instruksjoner):**
«Dette er en flott tekst med mye bra! Du har en tydelig struktur og viser god forståelse for temaet. Språket er levende og engasjerende. Kanskje utdype konklusjonen litt, og sjekke noen kommaer. Totalt sett er dette et sterkt arbeid — fortsett sånn!»

**Instruert KI:**
«Argumentasjonen i avsnitt 2–3 støtter ikke påstanden i innledningen — de beskriver fenomenet uten å forklare hvorfor det er et problem. Konklusjonen introduserer et nytt poeng som ikke er etablert tidligere. Tre steder med kommafeil som bryter setningsflyten. Hva var den faglige påstanden du ville bevise?»

**Mekanisme:** Tone maskerer
**Udir-forankring:** Elever skal forstå at egne vurderinger kan være ufullstendige — og at positiv tone ikke er det samme som faglig kvalitet.

---

### Eksempel 2 — Skjult antakelse
**Spørsmål:** «Er lekser bra for læring?»

**Standard-KI (uten instruksjoner):**
«Lekser kan absolutt være bra for læring! De gir elever mulighet til å øve på det de har lært og utvikle gode arbeidsvaner. Forskning viser at lekser kan ha positiv effekt på skoleresultater, særlig for eldre elever. Nøkkelen er at leksene er relevante og tilpasset elevenes nivå.»

**Instruert KI:**
«Forskningen er mer delt enn det ofte fremstilles. Harris Cooper finner positiv effekt for ungdomsskole og VGS, svakere eller ingen effekt for barneskole. Hatties metaanalyse gir lekser effektstørrelse d=0.29 — moderat. Merk: spørsmålet «bra for læring» forutsetter at læring betyr skoleresultater — det er i seg selv omdiskutert. Motargumenter inkluderer sosial ulikhet og stress. Hva vil du egentlig undersøke?»

**Mekanisme:** Skjult antakelse
**Udir-forankring:** «Etablerte ideer må granskes og kritiseres ved hjelp av teorier, metoder, argumenter og evidens» (Udir 1.3).

---

### Eksempel 3 — Usynlig brukerantagelse
**Spørsmål:** «Er det sunt å spise egg hver dag?»

**Standard-KI (uten instruksjoner):**
«Egg er faktisk veldig sunne og kan absolutt spises daglig for de fleste! De er fulle av protein, vitaminer og mineraler. Tidligere bekymringer om kolesterol har vist seg å være overdrevne for friske voksne. Et egg om dagen er helt greit for de fleste mennesker.»

**Instruert KI:**
«Forskningen har endret seg: nyere studier tyder på at kostholdskolesterol har mindre effekt på blodkolesterol enn tidligere antatt — for de fleste. Men effekten varierer betydelig med individuelle faktorer som diabetes og hjertesykdom. Helsedirektoratets kostråd sier ikke «daglig» eksplisitt. «Sunt» avhenger av resten av kostholdet ditt og din helsetilstand. Er det en spesifikk helsekontekst du tenker på?»

**Mekanisme:** Usynlig brukerantagelse
**Udir-forankring:** Digital dømmekraft — evne til å vurdere KI-svar på tvers av domener, ikke bare i faglige kontekster.

---

## Brukerflyt (ikke endre rekkefølgen)

1. **Aha-øyeblikket** — Velg et eksempel, se to svar side om side. Ingen forklaring. Bare opplevelsen.
2. **Velg domene** — Utdanning / Teknisk / Generelt (styrer eksempler og profiltekster)
3. **Bryterne** — Skru av og på instruksjoner, se effekten i sanntid
4. **Bygg profil** — Rolle, tone, aldri-regler, fokusområde (maks 4 valg)
5. **Eksporter** — Ferdig instrukstekst med kopier-funksjon, klar til Claude Projects / ChatGPT / Copilot

---

## Tech-stack og konvensjoner

- **Framework:** Next.js 14+ med App Router
- **Styling:** Tailwind CSS
- **Komponenter:** shadcn/ui
- **Hosting:** Vercel
- **Språk:** TypeScript
- **Ingen innlogging** — alt er stateless, ingen database i MVP
- **Ingen live API-kall i kjerneflyten** — eksempelpar er hardkodet innhold

### Filstruktur (konvensjon)
```
src/
  app/
    page.tsx              # Landingsside med aha-øyeblikket
    layout.tsx
  components/
    AhaMoment.tsx         # Eksempelpar side om side
    DomainSelector.tsx    # Velg domene
    InstructionBuilder.tsx # Bryterne + profilwizard
    ExportPanel.tsx       # Kopier-funksjon + eksport
  content/
    examples.ts           # De tre eksempelparene (hardkodet)
    profiles.ts           # Domeneprofiler og instrukstekster
    toggles.ts            # Brytertekster
  lib/
    buildInstruction.ts   # Funksjon som bygger instrukstekst fra valg
```

### Komponentprinsipper
- Alle komponenter er server components som standard — klient-komponenter merkes eksplisitt med `'use client'`
- Ingen `any` i TypeScript
- Eksempelpar og instrukstekster importeres fra `content/` — aldri hardkodet inline i komponenter
- Kopier-funksjon bruker `navigator.clipboard.writeText` med fallback

---

## Agenter

### pedagogisk-agent
Når du skriver nytt innhold (eksempelpar, brytertekster, instrukstekster):
- Sjekk at det illustrerer én av de tre mekanismene
- Sjekk at det kan forankres i Udir 1.3 eller digital dømmekraft
- Sjekk at standard-svaret er genuint overbevisende — ikke åpenbart dårlig
- Sjekk at det instruerte svaret er merkbart annerledes i *hva det gjør*, ikke bare i lengde eller tone

### innhold-agent
Når du legger til eksempelpar:
- De tre mekanismene skal alltid være dekket (én per eksempel)
- Eksempler skal dekke minst to domener (skole + noe annet)
- Standard-svaret skal aldri inneholde faktafeil — det skal bare være ufullstendig eller villedende
- Instruksteksten skal aldri være lengre enn 6 setninger

### teknisk-agent
- Bruk shadcn/ui-komponenter fremfor egne der det finnes en passende
- Alle tekster og innhold hentes fra `content/`-mappen, aldri inline
- Kopier-knapp skal alltid gi visuell bekreftelse (ikke bare stole på clipboard-API)
- Mobilvisning er ikke valgfritt — test alltid i 375px bredde

---

## Det vi IKKE bygger (i MVP)

- Ingen brukerkontoer eller lagring
- Ingen live KI-integrasjon i kjerneflyten
- Ingen RegEx-basert tekstanalyse («røntgen»)
- Ingen diagnose-steg der brukeren limer inn eget KI-svar
- Ingen mer enn 3 eksempelpar i første versjon
- Ingen mer enn 4 valgspørsmål i profilwizarden

---

## Definisjon av ferdig (MVP)

Produktet er ferdig når en lærer som aldri har hørt om systemprompter kan:
1. Se aha-øyeblikket og forstå at instruksjoner endrer svaret — uten å lese noen forklaring
2. Bygge en personlig instrukstekst på under 3 minutter
3. Kopiere teksten og lime den inn i Claude, ChatGPT eller Copilot

Alt annet er versjon 2.
