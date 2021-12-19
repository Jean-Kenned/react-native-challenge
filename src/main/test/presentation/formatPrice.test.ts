import {formatPrice} from '@/presentation/components/ProductCard/formatPrice'

describe('Validate formatPrice function', () => {
  test('Should return the correct price value formatted', () => {
    expect(formatPrice(30.4)).toBe('R$ 30,40')
  })
})
