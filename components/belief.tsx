import { ArrowRight, Star } from 'lucide-react'
import Link from 'next/link'

export function Belief() {
  return (
    <section className="border-y-2 border-foreground bg-primary text-primary-foreground">
      <div className="mx-auto max-w-3xl px-5 py-20 text-center md:py-28">
        <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.2em] text-primary-foreground/85">
          <Star aria-hidden="true" className="h-3.5 w-3.5 fill-current" />
          Our belief
        </span>

        <p className="mt-6 text-balance text-2xl font-medium leading-relaxed md:text-3xl">
          We believe many of the anxiety, stress, and disconnection people feel
          today are not just individual problems, but product outcomes of
          devices designed to maximize attention. Our hypothesis is that if we
          redesign the phone around presence instead of engagement, we can
          reduce self-destructive digital habits, help users reclaim focus, and
          create more space for real-world relationships.
        </p>

        <Link
          href="/thesis"
          className="mt-8 inline-flex items-center gap-2 rounded-full border-2 border-primary-foreground bg-background px-6 py-3 font-bold uppercase tracking-wide text-foreground transition-all hover:translate-x-0.5 hover:translate-y-0.5"
        >
          Read More
          <ArrowRight aria-hidden="true" className="h-4 w-4" />
        </Link>
      </div>
    </section>
  )
}
