import { Star } from 'lucide-react'
import Link from 'next/link'

const columns = [
  {
    title: 'Product',
    links: ['Design', 'Colors', 'Specs', 'Pre-order'],
  },
  {
    title: 'Company',
    links: ['About', 'Sustainability', 'Press', 'Careers'],
  },
  {
    title: 'Support',
    links: ['Help center', 'Warranty', 'Repairs', 'Contact'],
  },
]

export function SiteFooter() {
  return (
    <footer className="border-t-2 border-foreground bg-card">
      <div className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-full border-2 border-foreground bg-primary font-display text-lg text-primary-foreground">
                R
              </span>
              <span className="font-display text-2xl uppercase tracking-tight">
                RetroPod
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm font-medium leading-relaxed text-foreground/70">
              A phone that remembers where it came from. Built to be used, not
              scrolled.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-[0.7rem] font-bold uppercase tracking-widest text-foreground/60">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t-2 border-foreground pt-6 text-sm font-medium text-foreground/70 sm:flex-row sm:items-center">
          <p>© 2026 RetroPod Inc. All rights rewound.</p>
          <p className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest">
            <Star aria-hidden="true" className="h-3.5 w-3.5 fill-primary text-primary" />
            Made with nostalgia
          </p>
        </div>
      </div>
    </footer>
  )
}
