import React from 'react'
import { Container, Header, ShoppingBagWrapper, Content, CardsContainer } from './styles'
import Logo from '@/presentation/assets/logo.svg'
import { ShoppingBag , SearchInput, ProductCard } from '@/presentation/components'

const Home: React.FC = () => {
  return (
    <Container>
      <Header>
        <Logo/>
        <ShoppingBagWrapper>
          <ShoppingBag/>
        </ShoppingBagWrapper>
      </Header>
      <Content>
       <SearchInput/>
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
