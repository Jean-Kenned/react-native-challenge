import { Cart } from '@/domain/usecases'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { ProductModel } from '@/domain/models'

export class LocalStorageCart implements Cart {
  readonly storageKey = 'products'

  async getAll (): Promise<ProductModel[]> {
    const productsString = await AsyncStorage.getItem(this.storageKey)
    const allProducts = JSON.parse(productsString ?? '[]')
    return allProducts
  }

  async addOrRemove (product: ProductModel): Promise<void> {
    const allCurrentProducts = await this.getAll()
    const addedProducts = allCurrentProducts.find((item: ProductModel) => item.id === product.id)
    let allProducts: ProductModel[] = allCurrentProducts
    allProducts = allCurrentProducts
      .filter((item: ProductModel) => item.id !== product.id)
    if (!addedProducts) {
      allProducts.unshift(product)
    }
    AsyncStorage.setItem(this.storageKey, JSON.stringify(allProducts))
  }

  async checkIfAdded (product: ProductModel): Promise<boolean> {
    const allCurrentProducts = await this.getAll()
    const isAdded = allCurrentProducts.find((item: ProductModel) => item.id === product.id)
    return !(isAdded === undefined)
  }
}
