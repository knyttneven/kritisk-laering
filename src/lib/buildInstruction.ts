import { toggles } from '@/content/toggles'
import type { Domain } from '@/content/profiles'

export type ProfileChoices = {
  domain: Domain | null
  activeToggleIds: string[]
}

export function buildInstruction(choices: ProfileChoices): string {
  const { domain, activeToggleIds } = choices

  const domainLine: Record<Domain, string> = {
    utdanning: 'Jeg er lærer, pedagog eller student.',
    teknisk: 'Jeg er utvikler, ingeniør eller analytiker.',
    generelt: 'Konteksten er generell, ikke fagspesifikk.',
  }

  const fragments = activeToggleIds
    .map((id) => toggles.find((t) => t.id === id)?.instructionFragment)
    .filter((f): f is string => !!f)

  const lines: string[] = []

  if (domain) lines.push(domainLine[domain])
  lines.push(...fragments)

  return lines.join(' ').trim()
}
