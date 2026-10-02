import { Star } from 'lucide-react'

const specs = [
  { k: 'Display', v: '2.4" color LCD, 320×240' },
  { k: 'Keypad', v: 'Backlit tactile T9 + D-pad' },
  { k: 'Battery', v: '36-hour life' },
  { k: 'Camera', v: '8 MP rear · lo-fi mode' },
  { k: 'Storage', v: '32 GB + microSD slot' },
  { k: 'Audio', v: '3.5 mm jack · USB-C · FM radio' },
  { k: 'Connectivity', v: '5G · Wi-Fi 6 · Bluetooth 5.3' },
  { k: 'Weight', v: '38 grams' },
]

export function Specs() {
  return (
    <section id="specs" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
      <div className="grid gap-10 md:grid-cols-[1fr_1.4fr]">
        <div>
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.2em] text-teal">
            <Star aria-hidden="true" className="h-3.5 w-3.5 fill-teal" />
            The fine print
          </span>
          <h2 className="mt-3 text-balance font-display text-4xl uppercase leading-[0.9] tracking-tight md:text-6xl">
            Designed for real-world human connection.
          </h2>
          <p className="mt-5 max-w-sm font-medium leading-relaxed text-foreground/80">
            Every RetroPod ships unlocked, repairable, and with a spare battery
            in the box. Because you should own your phone, not rent it.
          </p>
        </div>

        <dl className="grid grid-cols-1 gap-px overflow-hidden rounded-3xl border-2 border-foreground bg-foreground shadow-pop sm:grid-cols-2">
          {specs.map((spec) => (
            <div key={spec.k} className="bg-card p-6">
              <dt className="text-[0.7rem] font-bold uppercase tracking-widest text-foreground/60">
                {spec.k}
              </dt>
              <dd className="mt-2 font-display text-lg uppercase tracking-tight">
                {spec.v}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
