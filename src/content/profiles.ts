export type Domain = 'utdanning' | 'teknisk' | 'generelt'

export type DomainProfile = {
  id: Domain
  label: string
  description: string
}

export const profiles: DomainProfile[] = [
  {
    id: 'utdanning',
    label: 'Utdanning',
    description: 'Lærer, pedagog eller student',
  },
  {
    id: 'teknisk',
    label: 'Teknisk',
    description: 'Utvikler, ingeniør eller analytiker',
  },
  {
    id: 'generelt',
    label: 'Generelt',
    description: 'Alle andre kontekster',
  },
]
