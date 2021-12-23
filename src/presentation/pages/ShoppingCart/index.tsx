import React, { useEffect, useState } from 'react'
import { Container, Header, Content, CardsContainer } from './styles'
import Logo from '@/presentation/assets/logo.svg'
import { Loading } from '@/presentation/components'
import { Cart } from '@/domain/usecases'
import { ProductModel } from '@/domain/models'
import { makeProductCard as ProductCard } from '@/main/factories/components'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { useNavigation } from '@react-navigation/native'
import { Colors } from '@/presentation/helpers'

type Props = {
  cart: Cart
}

const ShoppingCart: React.FC<Props> = ({ cart }: Props) => {
  const [products, setProducts] = useState<ProductModel[]>([])
  const [loading,setLoading] = useState<boolean>(false)
  const navigation = useNavigation()

  useEffect(() => {
    setLoading(true)

    cart.getAll().then(products => {
      setProducts(products)
    }).catch()
      .finally(() => {
        setLoading(false)
      })
  },[])

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
      {loading
        ? <Loading/>
        : <Content>
          <CardsContainer>
            {products.map((product, index) => <ProductCard key={index} product={product}/>)}
          </CardsContainer>
        </Content>
      }
    </Container>
  )
}

export default ShoppingCart
