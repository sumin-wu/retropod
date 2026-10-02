import { BatteryFull, Keyboard, LayoutGrid, ShieldOff, Star } from 'lucide-react'

const features = [
  {
    icon: Keyboard,
    title: 'Tap and scroll',
    body: 'Type on a full touchscreen keyboard, then navigate everything with the backlit click wheel underneath. Modern touch, tactile control.',
    accent: 'bg-primary text-primary-foreground',
  },
  {
    icon: BatteryFull,
    title: '36-hour battery',
    body: 'A tiny, efficient chip and a real removable battery mean a day and a half between charges without thinking about it.',
    accent: 'bg-accent text-accent-foreground',
  },
  {
    icon: ShieldOff,
    title: 'No infinite feed',
    body: 'Calls, texts, a camera, and a music player. No app store, no autoplay, no algorithm quietly running your day.',
    accent: 'bg-teal text-primary-foreground',
  },
  {
    icon: LayoutGrid,
    title: 'Features',
    list: [
      'Navigation (Google Maps, Apple Maps, Find My, Life360, GPS)',
      'Music streaming (USB-C / Bluetooth)',
      'Text message',
      'Calling (Wi-Fi, data)',
      'Digital wallet',
      'Camera',
    ],
    accent: 'bg-tangerine text-accent-foreground',
  },
]

export function Features() {
  return (
    <section id="design" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
      <div className="max-w-2xl">
        <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.2em] text-primary">
          <Star aria-hidden="true" className="h-3.5 w-3.5 fill-primary" />
          Why RetroPod
        </span>
        <h2 className="mt-3 text-balance font-display text-4xl uppercase leading-[0.9] tracking-tight md:text-6xl">
          Old-school hardware, quietly modern essentials.
        </h2>
      </div>

      <div id="features" className="mt-12 grid scroll-mt-24 gap-5 sm:grid-cols-2">
        {features.map((f) => (
          <div
            key={f.title}
            className="group rounded-3xl border-2 border-foreground bg-card p-7 shadow-pop transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-pop-lg"
          >
            <span
              className={`inline-grid h-12 w-12 place-items-center rounded-2xl border-2 border-foreground ${f.accent}`}
            >
              <f.icon className="h-6 w-6" />
            </span>
            <h3 className="mt-5 font-display text-2xl uppercase tracking-tight">
              {f.title}
            </h3>
            {f.list ? (
              <ul className="mt-3 flex flex-col gap-2">
                {f.list.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 font-medium leading-snug text-foreground/75"
                  >
                    <Star
                      aria-hidden="true"
                      className="mt-1 h-3.5 w-3.5 shrink-0 fill-primary text-primary"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-2 font-medium leading-relaxed text-foreground/75">
                {f.body}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
