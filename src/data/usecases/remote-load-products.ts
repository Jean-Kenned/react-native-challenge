import { AccessDeniedError, UnexpectedError } from '@/domain/errors'
import { HttpClient, HttpStatusCode } from '@/data/protocols/http'

import { LoadProducts, LoadProductsResponse, ProductFilters } from '@/domain/usecases'
import { ProductModel } from '@/domain/models'

export class RemoteLoadProducts implements LoadProducts {
  constructor (
    private readonly url: string,
    private readonly httpClient: HttpClient<RemoteLoadProducts.Model>
  ) {}

  async loadAll (filters?: ProductFilters): Promise<LoadProductsResponse> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: 'get',
      params: filters
    })
    const response = httpResponse.body
    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok: return {
        items: response?.items ?? [],
        totalPages: response?.totalPages ?? 0
      }
      case HttpStatusCode.noContent: return { items: [], totalPages: 0 }
      case HttpStatusCode.forbidden: throw new AccessDeniedError()
      default: throw new UnexpectedError()
    }
  }
}

export namespace RemoteLoadProducts {
  export type Model = {
    items: ProductModel[]
    totalPages: number
  }
}
