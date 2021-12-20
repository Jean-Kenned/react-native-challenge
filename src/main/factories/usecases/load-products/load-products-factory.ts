import { makeApiUrl, makeAxiosHttpClient } from '@/main/factories/http'

import { LoadProducts } from '@/domain/usecases'
import { RemoteLoadProducts } from '@/data/usecases'

export const makeLoadProducts = (): LoadProducts =>
  new RemoteLoadProducts(
    makeApiUrl('/products'),
    makeAxiosHttpClient()
  )
