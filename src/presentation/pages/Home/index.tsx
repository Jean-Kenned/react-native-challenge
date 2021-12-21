import React, { useEffect, useState } from 'react'
import { Container, Header, ShoppingBagWrapper, Content, CardsContainer, SearchInputWrapper } from './styles'
import Logo from '@/presentation/assets/logo.svg'
import { ShoppingBag , SearchInput, ProductCard } from '@/presentation/components'
import { LoadProducts } from '@/domain/usecases'
import { ProductModel } from '@/domain/models'

type Props = {
  loadProducts: LoadProducts
}

const Home: React.FC<Props> = ({ loadProducts }: Props) => {
  const [products, setProducts] = useState<ProductModel[]>([])

  useEffect(() => {
    loadProducts.loadAll({ limit: 10 }).then(response => {
      setProducts(response)
    })
  }, [])

  return (
    <Container>
      <Header>
        <Logo/>
        <ShoppingBagWrapper>
          <ShoppingBag/>
        </ShoppingBagWrapper>
      </Header>
      <SearchInputWrapper>
       <SearchInput/>
      </SearchInputWrapper>
      <Content>
       <CardsContainer>
        {products.map((product, index) => <ProductCard key={index} product={product}/>)}
       </CardsContainer>
      </Content>
    </Container>
  )
}

export default Home
