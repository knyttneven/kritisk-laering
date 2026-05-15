import { toggles } from '@/content/toggles'
import { wizardQuestions } from '@/content/wizard'
import type { Domain } from '@/content/profiles'

export type ProfileChoices = {
  domain: Domain | null
  activeToggleIds: string[]
  wizardAnswers: Record<string, string>
}

export function buildInstruction(choices: ProfileChoices): string {
  const { domain, activeToggleIds, wizardAnswers } = choices

  const domainLine: Record<Domain, string> = {
    utdanning: 'Jeg er lærer, pedagog eller student.',
    teknisk: 'Jeg er utvikler, ingeniør eller analytiker.',
    generelt: 'Konteksten er generell, ikke fagspesifikk.',
  }

  const toggleFragments = activeToggleIds
    .map((id) => toggles.find((t) => t.id === id)?.instructionFragment)
    .filter((f): f is string => !!f)

  const wizardFragments = wizardQuestions
    .map((q) => {
      const selectedId = wizardAnswers[q.id]
      return q.options.find((o) => o.id === selectedId)?.instructionFragment
    })
    .filter((f): f is string => !!f)

  const lines: string[] = []

  if (domain) lines.push(domainLine[domain])
  lines.push(...wizardFragments)
  lines.push(...toggleFragments)

  return lines.join(' ').trim()
}
