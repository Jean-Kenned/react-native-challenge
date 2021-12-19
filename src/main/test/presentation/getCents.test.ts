import { getCents } from '@/presentation/components/PriceMember/getCents'

describe('Validate getCents function', () => {
  test('Should return the correct cents value formatted', () => {
    expect(getCents(30.4)).toBe('40')
  })
})
