import Link from 'next/link'
import { Button } from '@/components/ui/button'

const nav = [
  { label: 'Design', href: '/#design' },
  { label: 'Features', href: '/#features' },
  { label: 'Colors', href: '/#colors' },
  { label: 'Specs', href: '/#specs' },
  { label: 'Thesis', href: '/thesis' },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b-2 border-foreground bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link href="/#top" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-full border-2 border-foreground bg-primary font-display text-lg text-primary-foreground">
            R
          </span>
          <span className="font-display text-2xl uppercase tracking-tight">
            RetroPod
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-semibold uppercase tracking-wide text-foreground/70 transition-colors hover:bg-secondary hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Button
          nativeButton={false}
          render={<Link href="/#preorder" />}
          className="rounded-full border-2 border-foreground bg-accent font-bold uppercase tracking-wide text-accent-foreground shadow-pop transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:bg-accent hover:shadow-none"
        >
          Pre-order
        </Button>
      </div>
    </header>
  )
}
