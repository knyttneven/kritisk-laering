'use client'

import { useState } from 'react'
import { examples } from '@/content/examples'

const mechanismColors: Record<string, string> = {
  'tone-maskerer': 'bg-amber-500/20 text-amber-200 border border-amber-400/30',
  'skjult-antakelse': 'bg-purple-500/20 text-purple-200 border border-purple-400/30',
  'usynlig-antagelse': 'bg-blue-500/20 text-blue-200 border border-blue-400/30',
}

export default function AhaMoment() {
  const [activeIndex, setActiveIndex] = useState(0)
  const example = examples[activeIndex]

  return (
    <div className="w-full max-w-5xl mx-auto space-y-5">
      <p className="text-center text-base font-medium text-white/80 italic">
        &laquo;{example.question}&raquo;
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div
          className="rounded-xl border border-white/15 p-5"
          style={{ background: 'rgba(255,255,255,0.07)', backdropFilter: 'blur(12px)' }}
        >
          <p className="text-xs font-semibold uppercase tracking-wide text-white/40 mb-3">
            Uten instruksjoner
          </p>
          <p className="text-white/70 leading-relaxed text-sm">{example.standard}</p>
        </div>

        <div
          className="rounded-xl border border-emerald-400/40 p-5"
          style={{ background: 'rgba(52,211,153,0.12)', backdropFilter: 'blur(12px)' }}
        >
          <p className="text-xs font-semibold uppercase tracking-wide text-emerald-300 mb-3">
            Med instruksjoner
          </p>
          <p className="text-white leading-relaxed text-sm">{example.instructed}</p>
        </div>
      </div>

      <div className="flex flex-col items-center gap-3">
        <span
          className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${mechanismColors[example.mechanism]}`}
        >
          {example.mechanismLabel}
        </span>

        <div className="flex items-center gap-2">
          {examples.map((ex, i) => (
            <button
              key={ex.id}
              onClick={() => setActiveIndex(i)}
              aria-label={`Eksempel ${i + 1}: ${ex.question}`}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                i === activeIndex ? 'bg-white' : 'bg-white/30 hover:bg-white/60'
              }`}
            />
          ))}
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => setActiveIndex((i) => (i - 1 + examples.length) % examples.length)}
            disabled={examples.length <= 1}
            className="px-3 py-1.5 text-sm rounded-lg border border-white/20 text-white/70 hover:bg-white/10 hover:text-white transition-colors disabled:opacity-30"
          >
            ← Forrige
          </button>
          <button
            onClick={() => setActiveIndex((i) => (i + 1) % examples.length)}
            disabled={examples.length <= 1}
            className="px-3 py-1.5 text-sm rounded-lg border border-white/20 text-white/70 hover:bg-white/10 hover:text-white transition-colors disabled:opacity-30"
          >
            Neste →
          </button>
        </div>
      </div>
    </div>
  )
}
