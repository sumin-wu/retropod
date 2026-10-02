'use client'

import {
  EmbeddedCheckout,
  EmbeddedCheckoutProvider,
} from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import { useCallback } from 'react'
import { startCheckoutSession } from '@/app/actions/stripe'

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string,
)

export function Checkout({
  productId,
  email,
}: {
  productId: string
  email: string
}) {
  const fetchClientSecret = useCallback(
    () => startCheckoutSession(productId, email),
    [productId, email],
  )

  return (
    <div className="overflow-hidden rounded-2xl border-2 border-foreground bg-card">
      <EmbeddedCheckoutProvider
        stripe={stripePromise}
        options={{ fetchClientSecret }}
      >
        <EmbeddedCheckout />
      </EmbeddedCheckoutProvider>
    </div>
  )
}
