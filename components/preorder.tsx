'use client'

import { ArrowLeft, Star } from 'lucide-react'
import type React from 'react'
import { useState } from 'react'
import { Checkout } from '@/components/checkout'
import { Button } from '@/components/ui/button'

export function Preorder() {
  const [email, setEmail] = useState('')
  const [step, setStep] = useState<'email' | 'payment'>('email')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return
    setStep('payment')
  }

  return (
    <section id="preorder" className="mx-auto max-w-6xl px-5 pb-24">
      <div className="relative overflow-hidden rounded-4xl border-2 border-foreground bg-primary px-6 py-16 text-primary-foreground shadow-pop-lg md:px-16 md:py-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-accent/30 blur-2xl"
        />
        <div className="relative mx-auto max-w-xl text-center">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.2em] text-primary-foreground/85">
            <Star aria-hidden="true" className="h-3.5 w-3.5 fill-current" />
            Ships Spring 2026
            <Star aria-hidden="true" className="h-3.5 w-3.5 fill-current" />
          </span>
          <h2 className="mt-3 text-balance font-display text-5xl uppercase leading-[0.9] tracking-tight md:text-6xl">
            Reserve yours for $249.
          </h2>
          <p className="mt-4 text-pretty font-medium leading-relaxed text-primary-foreground/90">
            {step === 'email'
              ? 'Drop your email to lock in launch pricing and pick your color first, then add your payment details.'
              : 'Almost there — add your card below to secure your RetroPod.'}
          </p>

          {step === 'email' ? (
            <form
              onSubmit={handleSubmit}
              className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
            >
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="h-12 flex-1 rounded-full border-2 border-foreground bg-card px-5 font-medium text-foreground outline-none placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-accent"
              />
              <Button
                type="submit"
                size="lg"
                className="h-12 rounded-full border-2 border-foreground bg-accent font-bold uppercase tracking-wide text-accent-foreground transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:bg-accent"
              >
                Continue
              </Button>
            </form>
          ) : (
            <div className="mt-8 text-left">
              <div className="mb-4 flex items-center justify-between gap-3 text-primary-foreground">
                <button
                  type="button"
                  onClick={() => setStep('email')}
                  className="inline-flex items-center gap-1.5 text-sm font-bold uppercase tracking-wide text-primary-foreground/85 transition-colors hover:text-primary-foreground"
                >
                  <ArrowLeft aria-hidden="true" className="h-4 w-4" />
                  Back
                </button>
                <span className="truncate text-sm font-medium text-primary-foreground/85">
                  {email}
                </span>
              </div>
              <Checkout productId="retropod-preorder" email={email} />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
