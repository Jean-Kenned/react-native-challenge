import React from 'react'
import BagImage from '@/presentation/assets/bag.svg'
import { Container, Counter, Number } from './styles'
import { useNavigation } from '@react-navigation/native'
import { ShoppingCartProps } from '@/main/routes/routes.types'
import { useStorage } from '@/presentation/hooks'

const ShoppingBag = (): React.FC => {
  const navigation = useNavigation<ShoppingCartProps['navigation']>()
  const { getNumberOfProductsInCart } = useStorage()
  

  return (
        <Container onPress={() => navigation.navigate('ShoppingCart')}>
            <BagImage/>
            <Counter>
                <Number>
                    {getNumberOfProductsInCart()}
                </Number>
            </Counter>
        </Container>
  )
}

export default ShoppingBag
