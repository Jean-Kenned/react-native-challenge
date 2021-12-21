import { Fonts } from '@/presentation/helpers'
import styled from 'styled-components/native'

export const Container = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: center;
`

export const Number = styled.Text`
  color: blue;
  font-size: ${Fonts.SIZE_1_5x};
  font-weight: bold;
`
