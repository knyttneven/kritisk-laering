export type WizardOption = {
  id: string
  label: string
  instructionFragment: string
}

export type WizardQuestion = {
  id: string
  label: string
  options: WizardOption[]
}

export const wizardQuestions: WizardQuestion[] = [
  {
    id: 'rolle',
    label: 'Hvem er du?',
    options: [
      {
        id: 'laerer',
        label: 'Lærer / pedagog',
        instructionFragment: 'Jeg er lærer. Tilpass svar til pedagogisk kontekst.',
      },
      {
        id: 'student',
        label: 'Student',
        instructionFragment: 'Jeg er student. Hjelp meg å forstå, ikke bare svare.',
      },
      {
        id: 'profesjonell',
        label: 'Profesjonell',
        instructionFragment: 'Jeg har fagbakgrunn. Vær presis og unngå forenklinger.',
      },
      {
        id: 'privatperson',
        label: 'Privatperson',
        instructionFragment: 'Jeg spør uten fagbakgrunn. Forklar uten sjargong.',
      },
    ],
  },
  {
    id: 'tone',
    label: 'Hvilken tone vil du ha?',
    options: [
      {
        id: 'direkte',
        label: 'Direkte og kortfattet',
        instructionFragment: 'Vær kortfattet og direkte. Ingen innledning eller avrunding.',
      },
      {
        id: 'pedagogisk',
        label: 'Pedagogisk',
        instructionFragment: 'Forklar steg for steg og bruk konkrete eksempler.',
      },
      {
        id: 'analytisk',
        label: 'Analytisk og nøytral',
        instructionFragment: 'Vær analytisk og nøytral. Presenter argumenter for og imot.',
      },
    ],
  },
  {
    id: 'aldri',
    label: 'Hva skal KI aldri gjøre?',
    options: [
      {
        id: 'aldri-konkluder',
        label: 'Aldri konkluder uten resonnement',
        instructionFragment: 'Vis alltid resonnementet bak konklusjonen din.',
      },
      {
        id: 'aldri-utenfor-felt',
        label: 'Aldri svar utenfor fagfeltet uten å si det',
        instructionFragment:
          'Hvis spørsmålet er utenfor ditt fagfelt, si det eksplisitt før du svarer.',
      },
      {
        id: 'aldri-sjargong',
        label: 'Aldri bruk fagsjargong uten forklaring',
        instructionFragment:
          'Definer faguttrykk første gang du bruker dem.',
      },
      {
        id: 'aldri-ett-perspektiv',
        label: 'Aldri gi ett svar der det finnes flere',
        instructionFragment:
          'Hvis det finnes flere like gyldige perspektiver, presenter dem.',
      },
    ],
  },
  {
    id: 'lengde',
    label: 'Hvor langt svar vil du ha?',
    options: [
      {
        id: 'kort',
        label: 'Kort — maks 3 setninger',
        instructionFragment: 'Hold svar til maks 3 setninger med mindre jeg ber om mer.',
      },
      {
        id: 'middels',
        label: 'Middels — ett avsnitt',
        instructionFragment: 'Svar i ett avsnitt.',
      },
      {
        id: 'utfyllende',
        label: 'Utfyllende — med struktur',
        instructionFragment: 'Gi utfyllende svar med tydelig struktur og overskrifter.',
      },
    ],
  },
]
