import { LocalStorageCart } from '@/data/usecases'
import { Cart } from '@/domain/usecases'

export const makeCart = (): Cart =>
  new LocalStorageCart()
