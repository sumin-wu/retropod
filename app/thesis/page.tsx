import { Star } from 'lucide-react'
import type { Metadata } from 'next'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'

export const metadata: Metadata = {
  title: 'Thesis — RetroPod',
  description:
    'Why we built RetroPod: a device designed around presence instead of engagement, to lower stress and increase real-world connection.',
}

export default function ThesisPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main>
        <section className="border-b-2 border-foreground">
          <div className="mx-auto max-w-3xl px-5 py-20 md:py-28">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.2em] text-primary">
              <Star aria-hidden="true" className="h-3.5 w-3.5 fill-primary" />
              Why we exist
            </span>

            <h1 className="mt-4 text-balance font-display text-5xl uppercase leading-[0.9] tracking-tight md:text-7xl">
              Thesis
            </h1>

            <p className="mt-8 text-pretty text-xl font-medium leading-relaxed text-foreground/85 md:text-2xl">
              Modern phones are optimized for attention capture, not human
              wellbeing. We believe a device that preserves essential utility
              while removing addictive digital loops can help people feel
              calmer, more present, and more connected in real life. By reducing
              constant comparison, doom scrolling, and notification-driven
              behavior, we believe this product can lower stress, reduce
              phone-driven anxiety and imposter syndrome, improve attention
              span, and increase face-to-face connection.
            </p>
          </div>
        </section>

        <section className="bg-teal/15">
          <div className="mx-auto max-w-3xl px-5 py-20 md:py-28">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.2em] text-teal">
              <Star aria-hidden="true" className="h-3.5 w-3.5 fill-teal" />
              What we predict
            </span>

            <h2 className="mt-4 text-balance font-display text-4xl uppercase leading-[0.9] tracking-tight md:text-6xl">
              Hypothesis
            </h2>

            <div className="mt-8 rounded-4xl border-2 border-foreground bg-card p-7 shadow-pop-lg md:p-10">
              <p className="text-pretty text-lg font-medium leading-relaxed text-foreground/85 md:text-xl">
                If we build a device that keeps the core functions people need —
                calling, messaging, navigation, music, payments, and camera —
                while removing the features that drive compulsive screen use,
                then users will spend less time doom scrolling, experience lower
                daily stress and anxiety, feel less social-comparison pressure,
                and engage in more in-person interaction.
              </p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
