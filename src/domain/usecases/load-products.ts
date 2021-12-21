import { ProductModel } from '@/domain/models'

export type ProductFilters = {
  page?: number
  limit?: number
  name?: number
  filter?: string
}

export type LoadProductsResponse = {
  items: ProductModel[]
  totalPages: number
}

export interface LoadProducts {
  loadAll: (filters?: ProductFilters) => Promise<LoadProductsResponse>
}
