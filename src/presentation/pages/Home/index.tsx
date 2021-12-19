import React from 'react'
import { Container, Header, ShoppingBagWrapper, Content, CardsContainer, SearchInputWrapper } from './styles'
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
