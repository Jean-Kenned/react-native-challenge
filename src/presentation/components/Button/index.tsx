import React from 'react'
import { Container, Text } from './styles'

type Props = {
  text: string
}

const Button = ({ text }: Props): React.FC => {
  return (
    <Container>
       <Text>
          {text}
       </Text>
    </Container>
  )
}

export default Button
