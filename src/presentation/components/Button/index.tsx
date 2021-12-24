import React from 'react'
import { Container, Text } from './styles'

type Props = {
  onPress: CallableFunction
  isAddedInCart: boolean
}

const Button = ({ onPress, isAddedInCart }: Props): React.FC => {
  return (
    <Container onPress={onPress} isAddedInCart={isAddedInCart}>
       <Text>
          {isAddedInCart ? 'REMOVER' : 'ADICIONAR'}
       </Text>
    </Container>
  )
}

export default Button
