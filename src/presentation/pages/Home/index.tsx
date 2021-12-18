import React from 'react'
import { Container, Header, ShoppingBagWrapper } from './styles'
import Logo from '@/presentation/assets/logo.svg'
import { ShoppingBag } from '@/presentation/components'

const Home: React.FC = () => {
  return (
    <Container>
      <Header>
        <Logo/>
        <ShoppingBagWrapper>
          <ShoppingBag/>
        </ShoppingBagWrapper>
      </Header>
    </Container>
  )
}

export default Home
