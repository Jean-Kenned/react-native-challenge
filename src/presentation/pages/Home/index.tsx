import React from 'react'
import { Container, Header, ShoppingBagWrapper, Content } from './styles'
import Logo from '@/presentation/assets/logo.svg'
import { ShoppingBag , SearchInput } from '@/presentation/components'

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
      </Content>
    </Container>
  )
}

export default Home
