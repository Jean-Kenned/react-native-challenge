import React from 'react'
import { Container, Text } from './styles'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { Colors } from '@/presentation/helpers'
import { TouchableOpacity } from 'react-native'

type Props = {
  productsFound: number
  onPress: CallableFunction
}

const Filter = ({ productsFound, onPress }: Props): React.FC => {
  return (
    <Container>
       <Text>
          {`${productsFound} produtos encontrados`}
       </Text>
       <TouchableOpacity onPress={onPress}>
        <FontAwesome5
            style={{ padding: 8 }}
            name={'filter'}
            solid
            color={Colors.FILTER_TEXT_COLOR}
            size={24}
            />
       </TouchableOpacity>
    </Container>
  )
}

export default Filter
