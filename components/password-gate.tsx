'use client'

import { Lock } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'

const PASSWORD = 'retropod'
const STORAGE_KEY = 'retropod-unlocked'

export function PasswordGate({ children }: { children: React.ReactNode }) {
  const [unlocked, setUnlocked] = useState(false)
  const [ready, setReady] = useState(false)
  const [value, setValue] = useState('')
  const [error, setError] = useState(false)

  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY) === 'true') {
      setUnlocked(true)
    }
    setReady(true)
  }, [])

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (value.trim().toLowerCase() === PASSWORD) {
      sessionStorage.setItem(STORAGE_KEY, 'true')
      setUnlocked(true)
      setError(false)
    } else {
      setError(true)
    }
  }

  // Avoid a flash of the gate before we know the unlock state.
  if (!ready) return null

  if (unlocked) return <>{children}</>

  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-5">
      <div className="w-full max-w-md rounded-4xl border-2 border-foreground bg-card p-8 shadow-pop-lg md:p-10">
        <div className="flex items-center gap-2">
          <span className="grid h-10 w-10 place-items-center rounded-full border-2 border-foreground bg-primary font-display text-lg text-primary-foreground">
            R
          </span>
          <span className="font-display text-2xl uppercase tracking-tight">
            RetroPod
          </span>
        </div>

        <h1 className="mt-8 text-balance font-display text-3xl uppercase leading-[0.95] tracking-tight md:text-4xl">
          This page is locked.
        </h1>
        <p className="mt-3 font-medium leading-relaxed text-foreground/70">
          Enter the password to step inside.
        </p>

        <form onSubmit={handleSubmit} className="mt-8">
          <label htmlFor="password" className="sr-only">
            Password
          </label>
          <div className="relative">
            <Lock
              aria-hidden="true"
              className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-foreground/50"
            />
            <input
              id="password"
              type="password"
              autoFocus
              value={value}
              onChange={(e) => {
                setValue(e.target.value)
                setError(false)
              }}
              placeholder="Password"
              aria-invalid={error}
              className="h-12 w-full rounded-full border-2 border-foreground bg-background pl-11 pr-5 font-medium text-foreground outline-none placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-accent"
            />
          </div>

          {error && (
            <p role="alert" className="mt-3 text-sm font-semibold text-primary">
              Wrong password. Try again.
            </p>
          )}

          <Button
            type="submit"
            size="lg"
            className="mt-5 w-full rounded-full border-2 border-foreground bg-accent font-bold uppercase tracking-wide text-accent-foreground shadow-pop transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:bg-accent hover:shadow-none"
          >
            Unlock
          </Button>
        </form>
      </div>
    </main>
  )
}
