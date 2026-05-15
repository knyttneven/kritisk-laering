export type Toggle = {
  id: string
  label: string
  description: string
  instructionFragment: string
}

export const toggles: Toggle[] = [
  {
    id: 'faglig-kritikk',
    label: 'Krev faglig kritikk',
    description: 'KI vil gi konkret faglig vurdering i stedet for generell oppmuntring.',
    instructionFragment:
      'Gi konkret faglig kritikk. Unngå generell oppmuntring — ros bare det som faktisk holder mål.',
  },
  {
    id: 'avdekk-antakelser',
    label: 'Avdekk antakelser',
    description: 'KI vil peke på antakelser som ligger skjult i spørsmålet ditt.',
    instructionFragment:
      'Hvis spørsmålet mitt bygger på en antakelse, si det eksplisitt før du svarer.',
  },
  {
    id: 'hvem-gjelder-svaret',
    label: 'Si hvem svaret gjelder',
    description: 'KI vil spesifisere hvem svaret faktisk gjelder, og nevne relevante unntak.',
    instructionFragment:
      'Oppgi tydelig om svaret gjelder alle eller bare noen. Nevn unntak der det er relevant.',
  },
  {
    id: 'si-hva-du-ikke-vet',
    label: 'Innrøm usikkerhet',
    description: 'KI vil si eksplisitt hva den er usikker på eller ikke vet.',
    instructionFragment:
      'Si eksplisitt hva du er usikker på, hva du gjetter, eller hva du ikke vet.',
  },
  {
    id: 'oppgi-kilde',
    label: 'Krev kildehenvisning',
    description: 'KI vil oppgi kilde eller bevisgrunnlag for faktapåstander.',
    instructionFragment: 'Oppgi alltid kilde eller bevisgrunnlag for faktapåstander.',
  },
  {
    id: 'still-oppfoelging',
    label: 'Still ett spørsmål tilbake',
    description: 'KI vil avslutte med ett spørsmål som hjelper deg å tenke videre.',
    instructionFragment:
      'Avslutt alltid med ett spørsmål som hjelper meg å tenke videre.',
  },
]
