import { AccessDeniedError, UnexpectedError } from '@/domain/errors'
import { HttpClient, HttpStatusCode } from '@/data/protocols/http'

import { LoadProducts, ProductFilters } from '@/domain/usecases'
import { ProductModel } from '@/domain/models'

export class RemoteLoadProducts implements LoadProducts {
  constructor (
    private readonly url: string,
    private readonly httpClient: HttpClient<RemoteLoadProducts.Model>
  ) {}

  async loadAll (filters?: ProductFilters): Promise<ProductModel[]> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: 'get',
      params: filters
    })
    const products = httpResponse.body?.items ?? []
    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok: return products
      case HttpStatusCode.noContent: return []
      case HttpStatusCode.forbidden: throw new AccessDeniedError()
      default: throw new UnexpectedError()
    }
  }
}

export namespace RemoteLoadProducts {
  export type Model = {
    items: ProductModel[]
  }
}
