'use server'

import { stripe } from '@/lib/stripe'
import { PRODUCTS } from '@/lib/products'

export async function startCheckoutSession(productId: string, email?: string) {
  const product = PRODUCTS.find((p) => p.id === productId)
  if (!product) {
    throw new Error(`Product with id "${productId}" not found`)
  }

  const trimmedEmail = email?.trim()

  const session = await stripe.checkout.sessions.create({
    // `embedded_page` replaced `embedded` in API version 2026-03-25.dahlia
    // (stripe-node v21+). This project uses stripe v22.
    ui_mode: 'embedded_page',
    redirect_on_completion: 'never',
    ...(trimmedEmail ? { customer_email: trimmedEmail } : {}),
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: product.name,
            description: product.description,
          },
          unit_amount: product.priceInCents,
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
  })

  return session.client_secret
}
