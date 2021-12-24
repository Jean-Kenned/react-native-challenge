import React from 'react'
import { Container } from './styles'
import RadioButton from './RadioButton'

export type Option = {
  label: string
  value: string
}

type Props = {
  options: Option[]
  setValue: CallableFunction
  value: Option
}

const RadioForm = ({ options, setValue, value }: Props): React.FC => {
  return (
    <Container>
      {options.map((option, index) => {
        return <RadioButton text={option.label} key={index} isSelected={value.value === option.value} onPress={() => setValue(option)}/>
      })}
    </Container>
  )
}

export default RadioForm
