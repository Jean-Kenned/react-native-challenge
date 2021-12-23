import { ProductModel } from '@/domain/models'

export interface Cart {
  getAll: () => Promise<ProductModel[]>
  addOrRemove: (product: ProductModel) => Promise<void>
  checkIfAdded: (product: ProductModel) => Promise<boolean>
}
