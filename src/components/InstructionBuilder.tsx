'use client'

import { toggles } from '@/content/toggles'

type Props = {
  activeIds: string[]
  onChange: (ids: string[]) => void
}

export default function InstructionBuilder({ activeIds, onChange }: Props) {
  function toggle(id: string) {
    onChange(
      activeIds.includes(id) ? activeIds.filter((i) => i !== id) : [...activeIds, id]
    )
  }

  return (
    <div className="w-full max-w-5xl mx-auto">
      <p className="text-sm font-medium text-zinc-500 mb-3">Skru på instruksjoner</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {toggles.map((t) => {
          const active = activeIds.includes(t.id)
          return (
            <button
              key={t.id}
              onClick={() => toggle(t.id)}
              className={`text-left px-4 py-3 rounded-lg border transition-colors ${
                active
                  ? 'bg-emerald-50 border-emerald-400 text-emerald-900'
                  : 'bg-white border-zinc-200 text-zinc-700 hover:border-zinc-400'
              }`}
            >
              <span className="flex items-center gap-2 font-medium text-sm">
                <span
                  className={`w-3 h-3 rounded-full flex-shrink-0 ${
                    active ? 'bg-emerald-500' : 'bg-zinc-300'
                  }`}
                />
                {t.label}
              </span>
              <span className="block text-xs mt-1 opacity-60 leading-snug">{t.description}</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
