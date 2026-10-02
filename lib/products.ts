export interface Product {
  id: string
  name: string
  description: string
  priceInCents: number
}

// Source of truth for all products. The server validates against this,
// so the client can never tamper with the price.
export const PRODUCTS: Product[] = [
  {
    id: 'retropod-preorder',
    name: 'RetroPod Pre-order',
    description:
      'Reserve your RetroPod at launch pricing. No charge until it ships in Spring 2026.',
    priceInCents: 24900, // $249.00
  },
]
