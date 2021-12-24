import { ProductModel } from '@/domain/models'
import { Cart } from '@/domain/usecases'
import React, { useState, useContext } from 'react'

const StorageContext = React.createContext({})

type Props = {
  children: any
  cart: Cart
}

interface StorageContextData {
  addOrRemoveProduct: (product: ProductModel) => void
  loadAllProductsFromCart: () => void
  checkIfAddedInCart: (product: ProductModel) => boolean
  cartProducts: ProductModel[]
}

export const StorageProvider: React.FC = ({ children, cart }: Props) => {
  const [cartProducts, setCartProducts] = useState<ProductModel[]>([])

  const addOrRemoveProduct = (product: ProductModel): void => {
    cart.addOrRemove(product).then(() => {
      loadAllProductsFromCart()
    })
  }

  const loadAllProductsFromCart = (): void => {
    cart.getAll().then(setCartProducts)
  }

  const checkIfAddedInCart = (product: ProductModel): boolean => {
    const isAdded = cartProducts.find((item: ProductModel) => item.id === product.id)
    return !(isAdded === undefined)
  }

  return (
    <StorageContext.Provider
      value={{ addOrRemoveProduct, loadAllProductsFromCart, checkIfAddedInCart, cartProducts }}>
      {children}
    </StorageContext.Provider>
  )
}

export function useStorage (): StorageContextData {
  const context = useContext(StorageContext)
  return context
}
