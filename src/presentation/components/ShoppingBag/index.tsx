import React from 'react'
import BagImage from '@/presentation/assets/bag.svg'
import { Container, Counter, Number } from './styles'
import { useNavigation } from '@react-navigation/native'
import { ShoppingCartProps } from '@/main/routes/routes.types'

const ShoppingBag = (): React.FC => {
  const navigation = useNavigation<ShoppingCartProps['navigation']>()

  return (
        <Container onPress={() => navigation.navigate('ShoppingCart')}>
            <BagImage/>
            <Counter>
                <Number>
                    1
                </Number>
            </Counter>
        </Container>
  )
}

export default ShoppingBag
