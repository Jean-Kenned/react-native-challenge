import { makeCart } from '@/main/factories/usecases'

import { ProductCard } from '@/presentation/components'
import { ProductModel } from '@/domain/models'
import React from 'react'

type Props = {
  product: ProductModel
}

export const makeProductCard: React.FC<Props> = ({ product }: Props) =>
  <ProductCard
    product={product}
    cart={makeCart()}
  />
