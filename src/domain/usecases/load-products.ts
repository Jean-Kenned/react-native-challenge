import { ProductModel } from '@/domain/models'

export interface LoadProducts {
  loadAll: () => Promise<ProductModel[]>
}
