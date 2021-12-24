import React from 'react'
import { Container, Button, InnerButton, Text } from './styles'

type Props = {
  text: string
  onPress: CallableFunction
  isSelected: boolean
  key?: number
}

const RadioButton = ({ text, onPress, isSelected }: Props): React.FC => {
  return (
    <Container onPress={onPress}>
      <Button>
        {isSelected && <InnerButton/>}
      </Button>
      <Text>{text}</Text>
    </Container>
  )
}

export default RadioButton
