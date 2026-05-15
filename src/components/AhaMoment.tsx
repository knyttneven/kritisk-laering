'use client'

import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { examples } from '@/content/examples'

const mechanismColors: Record<string, string> = {
  'tone-maskerer': 'bg-amber-100 text-amber-800',
  'skjult-antakelse': 'bg-purple-100 text-purple-800',
  'usynlig-antagelse': 'bg-blue-100 text-blue-800',
}

export default function AhaMoment() {
  const [activeIndex, setActiveIndex] = useState(0)
  const example = examples[activeIndex]

  return (
    <div className="w-full max-w-5xl mx-auto space-y-6">
      <p className="text-center text-lg font-medium text-zinc-700 italic">
        &laquo;{example.question}&raquo;
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="border border-zinc-200 bg-zinc-50">
          <CardContent className="pt-5 pb-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-zinc-400 mb-3">
              Uten instruksjoner
            </p>
            <p className="text-zinc-700 leading-relaxed text-sm">{example.standard}</p>
          </CardContent>
        </Card>

        <Card className="border-2 border-emerald-400 bg-white">
          <CardContent className="pt-5 pb-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-emerald-600 mb-3">
              Med instruksjoner
            </p>
            <p className="text-zinc-800 leading-relaxed text-sm">{example.instructed}</p>
          </CardContent>
        </Card>
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
                i === activeIndex ? 'bg-zinc-800' : 'bg-zinc-300 hover:bg-zinc-500'
              }`}
            />
          ))}
        </div>

        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setActiveIndex((i) => (i - 1 + examples.length) % examples.length)}
            disabled={examples.length <= 1}
          >
            ← Forrige
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setActiveIndex((i) => (i + 1) % examples.length)}
            disabled={examples.length <= 1}
          >
            Neste →
          </Button>
        </div>
      </div>
    </div>
  )
}
