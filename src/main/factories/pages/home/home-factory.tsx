import React from 'react'
import { Home } from '@/presentation/pages'
import { makeLoadProducts } from '@/main/factories/usecases'

export const makeHome: React.FC = () => (
  <Home loadProducts={makeLoadProducts()}/>
)
