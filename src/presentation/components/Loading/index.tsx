import React from 'react'
import { ActivityIndicator } from 'react-native'
import { Colors } from '@/presentation/helpers'
import { Container } from './styles'

const Loading = (): React.FC => {
  return (
       <Container>
          <ActivityIndicator size="small" color={Colors.BACKGROUND_BUTTON_COLOR}/>
       </Container>
  )
}

export default Loading
