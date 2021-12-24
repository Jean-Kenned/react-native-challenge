import React from 'react'
import { makeCart } from '@/main/factories/usecases'
import { StorageProvider } from '@/presentation/hooks'

export const makeStorageContext: React.FC = ({ children }) => (
  <StorageProvider cart={makeCart()}>{children}</StorageProvider>
)
