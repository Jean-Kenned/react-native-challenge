import React from 'react'
import { Container, Text } from './styles'

type Props = {
  onPress: CallableFunction
  isAddedInCart: boolean
  disabled: boolean
}

const Button = ({ onPress, isAddedInCart, disabled }: Props): React.FC => {
  return (
    <Container onPress={onPress} isAddedInCart={isAddedInCart} disabled={disabled}>
       <Text>
          {isAddedInCart ? 'REMOVER' : 'ADICIONAR'}
       </Text>
    </Container>
  )
}

export default Button
