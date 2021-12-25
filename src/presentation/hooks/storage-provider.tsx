import { ProductModel } from '@/domain/models'
import { Cart } from '@/domain/usecases'
import React, { useState, useContext, useEffect } from 'react'
import Toast from 'react-native-toast-message'
import { usePreviousState } from './previous-state'

const StorageContext = React.createContext({})

type Props = {
  children: any
  cart: Cart
}

interface StorageContextData {
  addOrRemoveProduct: (product: ProductModel) => void
  loadAllProductsFromCart: () => void
  checkIfAddedInCart: (product: ProductModel) => boolean
  getNumberOfProductsInCart: () => number
  cartProducts: ProductModel[]
}

export const StorageProvider: React.FC = ({ children, cart }: Props) => {
  const [cartProducts, setCartProducts] = useState<ProductModel[]>([])
  const previousCartProducts = usePreviousState<ProductModel[]>(cartProducts)

  const isProductAdded = (): boolean => {
    return previousCartProducts.length < cartProducts.length
  }

  useEffect(() => {
    if (!previousCartProducts?.length || previousCartProducts.length === cartProducts.length) return
    Toast.show({
      type: 'success',
      text1: isProductAdded() ? 'Produto adicionado ao carrinho' : 'Produto removido do carrinho'
    })
  },[cartProducts])

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

  const getNumberOfProductsInCart = (): boolean => {
    return cartProducts.length
  }

  return (
    <StorageContext.Provider
      value={{ addOrRemoveProduct, loadAllProductsFromCart, checkIfAddedInCart, getNumberOfProductsInCart, cartProducts }}>
      {children}
    </StorageContext.Provider>
  )
}

export function useStorage (): StorageContextData {
  const context = useContext(StorageContext)
  return context
}
