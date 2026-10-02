import { Star } from 'lucide-react'

const items = [
  'CLICKY KEYS',
  '36-HOUR BATTERY',
  'NO ALGORITHM',
  'SWAPPABLE SHELLS',
  'POLYPHONIC RINGTONES',
  'POCKET-SIZED',
  'ACTUALLY CALLS PEOPLE',
]

export function Marquee() {
  return (
    <div className="border-y-2 border-foreground bg-accent py-3 text-accent-foreground">
      <div className="flex overflow-hidden">
        <div className="marquee-track flex shrink-0 items-center gap-6 pr-6">
          {[...items, ...items].map((item, i) => (
            <span
              key={i}
              className="flex items-center gap-6 font-display text-base uppercase tracking-wide"
            >
              {item}
              <Star
                aria-hidden="true"
                className="h-4 w-4 fill-primary text-primary"
              />
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
