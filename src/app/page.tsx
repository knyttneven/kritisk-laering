'use client'

import { useState } from 'react'
import Intro from '@/components/Intro'
import AhaMoment from '@/components/AhaMoment'
import DomainSelector from '@/components/DomainSelector'
import InstructionBuilder from '@/components/InstructionBuilder'
import ProfileWizard from '@/components/ProfileWizard'
import ExportPanel from '@/components/ExportPanel'
import { buildInstruction } from '@/lib/buildInstruction'
import type { Domain } from '@/content/profiles'

export default function Home() {
  const [domain, setDomain] = useState<Domain | null>(null)
  const [activeToggleIds, setActiveToggleIds] = useState<string[]>([])
  const [wizardAnswers, setWizardAnswers] = useState<Record<string, string>>({})

  const instruction = buildInstruction({ domain, activeToggleIds, wizardAnswers })

  return (
    <>
      <div className="fixed inset-0 -z-10 gradient-bg" />

      <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 gap-12">
        <Intro />
        <AhaMoment />
        <div className="flex flex-col items-center gap-1 text-white/30 text-xs select-none pointer-events-none">
          <span>Bygg din instrukstekst</span>
          <span className="animate-bounce">↓</span>
        </div>
      </section>

      <section className="px-4 pb-24">
        <div className="max-w-5xl mx-auto rounded-2xl bg-white/90 backdrop-blur-2xl border border-white/50 shadow-2xl p-8 md:p-12 flex flex-col gap-8">
          <DomainSelector selected={domain} onChange={setDomain} />
          <hr className="border-zinc-200" />
          <InstructionBuilder activeIds={activeToggleIds} onChange={setActiveToggleIds} />
          <hr className="border-zinc-200" />
          <ProfileWizard answers={wizardAnswers} onChange={setWizardAnswers} />
          <hr className="border-zinc-200" />
          <ExportPanel instruction={instruction} />
        </div>
      </section>
    </>
  )
}
