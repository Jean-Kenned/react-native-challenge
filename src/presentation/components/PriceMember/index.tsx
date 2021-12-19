import React from 'react'
import { Reais, Text } from './styles'
import {getCents} from './getCents'

type Props = {
  price: number
}

const PriceMember = ({price}:Props): React.FC => {
  return (
       <Text>
           R$ <Reais>{Math.trunc(price)}</Reais>,{getCents(price)}
       </Text>
  )
}

export default PriceMember
