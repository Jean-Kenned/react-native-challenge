import { ProductModel } from '@/domain/models'

export type ProductFilters = {
  page?: number
  limit?: number
  name?: number
  filter?: string
}

export interface LoadProducts {
  loadAll: (filters?: ProductFilters) => Promise<ProductModel[]>
}
