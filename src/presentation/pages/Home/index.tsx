import React, { useEffect } from 'react'
import { Container, Header, ShoppingBagWrapper, Content, CardsContainer, SearchInputWrapper } from './styles'
import Logo from '@/presentation/assets/logo.svg'
import { ShoppingBag , SearchInput, ProductCard } from '@/presentation/components'
import { LoadProducts } from '@/domain/usecases'

type Props = {
  loadProducts: LoadProducts
}

const Home: React.FC<Props> = ({ loadProducts }: Props) => {
  useEffect(() => {
    loadProducts.loadAll({ limit: 10 }).then((resp) => {

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
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
       </CardsContainer>
      </Content>
    </Container>
  )
}

export default Home
