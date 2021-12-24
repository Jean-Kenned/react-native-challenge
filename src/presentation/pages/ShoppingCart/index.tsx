import React, { useEffect, useState } from 'react'
import { Container, Header, Content, CardsContainer } from './styles'
import Logo from '@/presentation/assets/logo.svg'
import { ProductModel } from '@/domain/models'
import { ProductCard } from '@/presentation/components'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { useNavigation } from '@react-navigation/native'
import { Colors } from '@/presentation/helpers'
import { useStorage } from '@/presentation/hooks'

const ShoppingCart: React.FC = () => {
  const [products, setProducts] = useState<ProductModel[]>([])
  const navigation = useNavigation()
  const { cartProducts } = useStorage()

  useEffect(() => {
    setProducts(cartProducts)
  },[cartProducts])

  return (
    <Container>
       <Header>
        <FontAwesome5
          style={{ padding: 8 }}
          name={'chevron-left'}
          solid
          color={Colors.BLACK}
          size={24}
          onPress={() => navigation.goBack()}
        />
         <Logo/>
      </Header>
      <Content>
          <CardsContainer>
            {products.map((product, index) => <ProductCard key={index} product={product}/>)}
          </CardsContainer>
      </Content>
    </Container>
  )
}

export default ShoppingCart
