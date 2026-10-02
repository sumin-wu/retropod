'use client'

import { Star } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { colors } from '@/lib/retropod-colors'
import { cn } from '@/lib/utils'

export function Hero() {
  const defaultIndex = colors.findIndex((c) => c.id === 'cherry')
  const [active, setActive] = useState(defaultIndex === -1 ? 0 : defaultIndex)
  const current = colors[active]

  return (
    <section id="top" className="relative overflow-hidden">
      {/* soft glow behind the product, tinted to the active color */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-24 -z-10 h-[520px] w-[520px] -translate-x-1/2 rounded-full blur-3xl transition-colors duration-500 md:left-[68%]"
        style={{ backgroundColor: current.swatch, opacity: 0.4 }}
      />
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-5 pb-10 pt-14 md:grid-cols-2 md:pb-20 md:pt-20">
        <div className="max-w-xl">
          <span className="inline-flex items-center gap-2 rounded-full border-2 border-foreground bg-card px-3 py-1 text-[0.72rem] font-bold uppercase tracking-widest shadow-pop">
            <Star
              aria-hidden="true"
              className="h-3.5 w-3.5 fill-primary text-primary"
            />
            New for 2026
          </span>
          <h1 className="mt-5 text-balance font-display text-6xl uppercase leading-[0.85] tracking-tight sm:text-7xl md:text-8xl">
            The retro
            <br />
            <span className="text-primary">future.</span>
          </h1>
          <p className="mt-6 max-w-md text-pretty text-lg font-medium leading-relaxed text-foreground/80">
            RetroPod is a genuinely modern phone hiding inside a candy-colored
            Y2K shell. Real clicky buttons, a battery that lasts a day and a
            half, and zero doomscrolling by design.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button
              nativeButton={false}
              render={<Link href="#preorder" />}
              size="lg"
              className="rounded-full border-2 border-foreground bg-accent font-bold uppercase tracking-wide text-accent-foreground shadow-pop transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:bg-accent hover:shadow-none"
            >
              Pre-order — $249
            </Button>
            <Button
              nativeButton={false}
              render={<Link href="#design" />}
              size="lg"
              variant="outline"
              className="rounded-full border-2 border-foreground bg-card font-bold uppercase tracking-wide text-foreground transition-all hover:bg-secondary"
            >
              Take the tour
            </Button>
          </div>

          <dl className="mt-10 grid max-w-md grid-cols-3 gap-4 border-t-2 border-foreground pt-6">
            {[
              { v: '36 hrs', k: 'Battery' },
              { v: '38 g', k: 'Weight' },
              { v: '5 colors', k: 'Colors' },
            ].map((stat) => (
              <div key={stat.k}>
                <dt className="text-[0.7rem] font-bold uppercase tracking-widest text-foreground/60">
                  {stat.k}
                </dt>
                <dd className="mt-1 font-display text-2xl uppercase">
                  {stat.v}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <div className="relative mx-auto aspect-square w-full max-w-lg">
            {colors.map((color, i) => (
              <Image
                key={color.id}
                src={color.src || '/placeholder.svg'}
                alt={`RetroPod music player in ${color.name}, showing a Now Playing screen and click wheel, floating at an angle`}
                fill
                priority={i === defaultIndex}
                sizes="(max-width: 768px) 90vw, 40vw"
                className={cn(
                  'object-contain drop-shadow-2xl transition-all duration-500',
                  active === i
                    ? 'scale-100 opacity-100'
                    : 'pointer-events-none scale-95 opacity-0',
                )}
              />
            ))}
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            {colors.map((color, i) => (
              <button
                key={color.id}
                type="button"
                onClick={() => setActive(i)}
                aria-pressed={active === i}
                aria-label={`Show RetroPod in ${color.name}`}
                title={color.name}
                className={cn(
                  'h-10 w-10 rounded-full border-2 border-foreground transition-all',
                  active === i
                    ? 'scale-110 shadow-pop'
                    : 'opacity-70 hover:scale-105 hover:opacity-100',
                )}
                style={{ backgroundColor: color.swatch }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
