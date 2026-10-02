'use client'

import { Star } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import { colors } from '@/lib/retropod-colors'
import { cn } from '@/lib/utils'

export function ColorShowcase() {
  const cherryIndex = Math.max(
    0,
    colors.findIndex((c) => c.id === 'cherry'),
  )
  const [active, setActive] = useState(cherryIndex)
  const current = colors[active]

  return (
    <section id="colors" className="border-y-2 border-foreground bg-teal/15">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-20 md:grid-cols-2 md:py-28">
        <div className="order-2 md:order-1">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.2em] text-primary">
            <Star aria-hidden="true" className="h-3.5 w-3.5 fill-primary" />
            Pick your flavor
          </span>
          <h2 className="mt-3 text-balance font-display text-4xl uppercase leading-[0.9] tracking-tight md:text-6xl">
            Five colors.
            <br />
            One very good phone.
          </h2>
          <p className="mt-5 max-w-md text-lg font-medium leading-relaxed text-foreground/80">
            {current.tagline}
          </p>

          <div className="mt-8 flex flex-wrap gap-5">
            {colors.map((color, i) => (
              <button
                key={color.id}
                type="button"
                onClick={() => setActive(i)}
                aria-pressed={active === i}
                aria-label={color.name}
                className="group flex flex-col items-center gap-2"
              >
                <span
                  className={cn(
                    'h-12 w-12 rounded-full border-2 border-foreground transition-all',
                    active === i
                      ? 'scale-110 shadow-pop'
                      : 'opacity-70 group-hover:scale-105 group-hover:opacity-100',
                  )}
                  style={{ backgroundColor: color.swatch }}
                />
                <span
                  className={cn(
                    'text-xs font-bold uppercase tracking-wide transition-colors',
                    active === i ? 'text-foreground' : 'text-foreground/50',
                  )}
                >
                  {color.name}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="order-1 md:order-2">
          <div className="relative mx-auto aspect-square w-full max-w-md">
            <div
              aria-hidden="true"
              className="absolute inset-8 rounded-full blur-3xl transition-colors duration-500"
              style={{ backgroundColor: current.swatch, opacity: 0.3 }}
            />
            {colors.map((color, i) => (
              <Image
                key={color.id}
                src={color.src || '/placeholder.svg'}
                alt={`RetroPod in ${color.name}`}
                fill
                sizes="(max-width: 768px) 90vw, 40vw"
                className={cn(
                  'object-contain drop-shadow-xl transition-all duration-500',
                  active === i
                    ? 'scale-100 opacity-100'
                    : 'pointer-events-none scale-95 opacity-0',
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
