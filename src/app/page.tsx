'use client'

import { useState } from 'react'
import AhaMoment from '@/components/AhaMoment'
import DomainSelector from '@/components/DomainSelector'
import InstructionBuilder from '@/components/InstructionBuilder'
import ExportPanel from '@/components/ExportPanel'
import { buildInstruction } from '@/lib/buildInstruction'
import type { Domain } from '@/content/profiles'

export default function Home() {
  const [domain, setDomain] = useState<Domain | null>(null)
  const [activeToggleIds, setActiveToggleIds] = useState<string[]>([])

  const instruction = buildInstruction({ domain, activeToggleIds })

  return (
    <main className="min-h-screen bg-zinc-50 flex flex-col items-center px-4 py-16 gap-16">
      <AhaMoment />

      <div className="w-full max-w-5xl border-t border-zinc-200" />

      <DomainSelector selected={domain} onChange={setDomain} />

      <InstructionBuilder activeIds={activeToggleIds} onChange={setActiveToggleIds} />

      <ExportPanel instruction={instruction} />
    </main>
  )
}
