import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { Marquee } from '@/components/marquee'
import { Features } from '@/components/features'
import { Belief } from '@/components/belief'
import { ColorShowcase } from '@/components/color-showcase'
import { Specs } from '@/components/specs'
import { Preorder } from '@/components/preorder'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main>
        <Hero />
        <Marquee />
        <Features />
        <Belief />
        <ColorShowcase />
        <Specs />
        <Preorder />
      </main>
      <SiteFooter />
    </div>
  )
}
