import React from 'react'
import { Container, Number, Ellipsis } from './styles'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { Colors } from '@/presentation/helpers'

export enum ItemContentTypes {
  NUMBER,
  ARROW_BACK,
  ARROW_FORTH,
  ELLIPSIS
}

type Props = {
  type: ItemContentTypes
  number?: number
  onPress?: CallableFunction
  isActive?: boolean
  key?: number
}

const Item = ({ type, number, isActive, onPress }: Props): React.FC => {
  const ContentItem = ({ itemContentType }: {itemContentType: ItemContentTypes}): React.FC => {
    switch (itemContentType) {
      case ItemContentTypes.NUMBER:
        return <Number isActive={isActive}>
                  {number}
              </Number>
      case ItemContentTypes.ARROW_BACK:
        return <FontAwesome5 name={'chevron-left'} solid color={Colors.DARK_GRAY}/>

      case ItemContentTypes.ARROW_FORTH:
        return <FontAwesome5 name={'chevron-right'} solid color={Colors.DARK_GRAY}/>
      case ItemContentTypes.ELLIPSIS:
        return <Ellipsis>...</Ellipsis>
    }
  }

  return (
    <Container isActive={isActive} isNumberType={type === ItemContentTypes.NUMBER} disabled={type === ItemContentTypes.ELLIPSIS} onPress={onPress}>
      <ContentItem itemContentType={type}/>
    </Container>
  )
}

export default Item
