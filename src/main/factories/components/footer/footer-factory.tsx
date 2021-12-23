import { makeCart } from '@/main/factories/usecases'

import Footer from '@/presentation/pages/Product/Footer'
import { ProductModel } from '@/domain/models'
import React from 'react'

type Props = {
  product: ProductModel
}

export const makeFooter: React.FC<Props> = ({ product }: Props) =>
  <Footer
    product={product}
    cart={makeCart()}
  />
