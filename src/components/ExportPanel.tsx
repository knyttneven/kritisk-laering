'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'

type Props = {
  instruction: string
}

export default function ExportPanel({ instruction }: Props) {
  const [copied, setCopied] = useState(false)

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(instruction)
    } catch {
      const el = document.createElement('textarea')
      el.value = instruction
      document.body.appendChild(el)
      el.select()
      document.execCommand('copy')
      document.body.removeChild(el)
    }
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  if (!instruction) {
    return (
      <div className="w-full max-w-5xl mx-auto">
        <p className="text-sm text-zinc-400 italic">
          Velg kontekst og skru på minst én instruksjon for å generere teksten.
        </p>
      </div>
    )
  }

  return (
    <div className="w-full max-w-5xl mx-auto space-y-3">
      <p className="text-sm font-medium text-zinc-500">Din instrukstekst</p>
      <div className="bg-zinc-900 text-zinc-100 rounded-lg px-5 py-4 text-sm leading-relaxed font-mono">
        {instruction}
      </div>
      <div className="flex items-center gap-3">
        <Button onClick={handleCopy} variant={copied ? 'default' : 'outline'} size="sm">
          {copied ? 'Kopiert!' : 'Kopier tekst'}
        </Button>
        <p className="text-xs text-zinc-400">
          Lim inn i Claude Projects, ChatGPT eller Copilot som systeminstruksjon.
        </p>
      </div>
    </div>
  )
}
