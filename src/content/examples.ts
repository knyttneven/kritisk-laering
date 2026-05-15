export type Mechanism = 'tone-maskerer' | 'skjult-antakelse' | 'usynlig-antagelse'

export type ExamplePair = {
  id: string
  question: string
  mechanism: Mechanism
  mechanismLabel: string
  udirAnchor: string
  standard: string
  instructed: string
}

export const examples: ExamplePair[] = [
  {
    id: 'elevtekst',
    question: 'Kan du gi tilbakemelding på denne elevteksten?',
    mechanism: 'tone-maskerer',
    mechanismLabel: 'Tone maskerer',
    udirAnchor: 'Elever skal forstå at positiv tone ikke er det samme som faglig kvalitet (Udir 1.3)',
    standard:
      'Dette er en flott tekst med mye bra! Du har en tydelig struktur og viser god forståelse for temaet. Språket er levende og engasjerende. Kanskje utdype konklusjonen litt, og sjekke noen kommaer. Totalt sett er dette et sterkt arbeid — fortsett sånn!',
    instructed:
      'Argumentasjonen i avsnitt 2–3 støtter ikke påstanden i innledningen — de beskriver fenomenet uten å forklare hvorfor det er et problem. Konklusjonen introduserer et nytt poeng som ikke er etablert tidligere. Tre steder med kommafeil som bryter setningsflyten. Hva var den faglige påstanden du ville bevise?',
  },
  {
    id: 'lekser',
    question: 'Er lekser bra for læring?',
    mechanism: 'skjult-antakelse',
    mechanismLabel: 'Skjult antakelse',
    udirAnchor: '«Etablerte ideer må granskes og kritiseres ved hjelp av teorier, metoder, argumenter og evidens» (Udir 1.3)',
    standard:
      'Lekser kan absolutt være bra for læring! De gir elever mulighet til å øve på det de har lært og utvikle gode arbeidsvaner. Forskning viser at lekser kan ha positiv effekt på skoleresultater, særlig for eldre elever. Nøkkelen er at leksene er relevante og tilpasset elevenes nivå.',
    instructed:
      'Forskningen er mer delt enn det ofte fremstilles. Harris Cooper finner positiv effekt for ungdomsskole og VGS, svakere eller ingen effekt for barneskole. Hatties metaanalyse gir lekser effektstørrelse d=0.29 — moderat. Merk: spørsmålet «bra for læring» forutsetter at læring betyr skoleresultater — det er i seg selv omdiskutert. Motargumenter inkluderer sosial ulikhet og stress. Hva vil du egentlig undersøke?',
  },
  {
    id: 'egg',
    question: 'Er det sunt å spise egg hver dag?',
    mechanism: 'usynlig-antagelse',
    mechanismLabel: 'Usynlig brukerantagelse',
    udirAnchor: 'Digital dømmekraft — evne til å vurdere KI-svar på tvers av domener (Udirs rammeverk)',
    standard:
      'Egg er faktisk veldig sunne og kan absolutt spises daglig for de fleste! De er fulle av protein, vitaminer og mineraler. Tidligere bekymringer om kolesterol har vist seg å være overdrevne for friske voksne. Et egg om dagen er helt greit for de fleste mennesker.',
    instructed:
      'Forskningen har endret seg: nyere studier tyder på at kostholdskolesterol har mindre effekt på blodkolesterol enn tidligere antatt — for de fleste. Men effekten varierer betydelig med individuelle faktorer som diabetes og hjertesykdom. Helsedirektoratets kostråd sier ikke «daglig» eksplisitt. «Sunt» avhenger av resten av kostholdet ditt og din helsetilstand. Er det en spesifikk helsekontekst du tenker på?',
  },
]
