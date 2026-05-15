'use client'

import { profiles } from '@/content/profiles'
import type { Domain } from '@/content/profiles'

type Props = {
  selected: Domain | null
  onChange: (domain: Domain) => void
}

export default function DomainSelector({ selected, onChange }: Props) {
  return (
    <div className="w-full max-w-5xl mx-auto">
      <p className="text-sm font-medium text-zinc-500 mb-3">Velg din kontekst</p>
      <div className="flex gap-3 flex-wrap">
        {profiles.map((profile) => (
          <button
            key={profile.id}
            onClick={() => onChange(profile.id)}
            className={`px-4 py-2 rounded-lg border text-sm font-medium transition-colors ${
              selected === profile.id
                ? 'bg-zinc-900 text-white border-zinc-900'
                : 'bg-white text-zinc-700 border-zinc-200 hover:border-zinc-400'
            }`}
          >
            {profile.label}
            <span className="block text-xs font-normal opacity-60">{profile.description}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
