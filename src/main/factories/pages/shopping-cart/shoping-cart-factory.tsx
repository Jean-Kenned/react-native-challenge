import React from 'react'
import { ShoppingCart } from '@/presentation/pages'
import { makeCart } from '@/main/factories/usecases'

export const makeShoppingCart: React.FC = () => (
  <ShoppingCart cart={makeCart()}/>
)
