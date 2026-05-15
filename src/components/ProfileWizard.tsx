'use client'

import { useState } from 'react'
import { wizardQuestions } from '@/content/wizard'

type Props = {
  answers: Record<string, string>
  onChange: (answers: Record<string, string>) => void
}

export default function ProfileWizard({ answers, onChange }: Props) {
  const [open, setOpen] = useState(false)

  function select(questionId: string, optionId: string) {
    onChange({ ...answers, [questionId]: optionId })
  }

  const answeredCount = Object.keys(answers).length

  return (
    <div className="w-full max-w-5xl mx-auto">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-2 text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors"
      >
        <span
          className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${
            open ? 'bg-zinc-900 border-zinc-900 text-white' : 'border-zinc-400'
          }`}
        >
          {open ? '−' : '+'}
        </span>
        Bygg detaljert profil
        {answeredCount > 0 && (
          <span className="ml-1 text-xs text-zinc-400">({answeredCount}/4 valgt)</span>
        )}
      </button>

      {open && (
        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {wizardQuestions.map((question) => (
            <div key={question.id}>
              <p className="text-xs font-semibold uppercase tracking-wide text-zinc-400 mb-2">
                {question.label}
              </p>
              <div className="flex flex-col gap-2">
                {question.options.map((option) => {
                  const selected = answers[question.id] === option.id
                  return (
                    <button
                      key={option.id}
                      onClick={() => select(question.id, option.id)}
                      className={`text-left px-3 py-2 rounded-lg border text-sm transition-colors ${
                        selected
                          ? 'bg-zinc-900 text-white border-zinc-900'
                          : 'bg-white text-zinc-700 border-zinc-200 hover:border-zinc-400'
                      }`}
                    >
                      {option.label}
                    </button>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
