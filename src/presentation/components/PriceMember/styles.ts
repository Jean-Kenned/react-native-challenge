import { Colors, Fonts } from '@/presentation/helpers'
import styled from 'styled-components/native'

export const Text = styled.Text`
  color: ${Colors.PRICE_MEMBER_TEXT_COLOR};
  font-style: normal;
  font-weight: bold;
  font-size: ${Fonts.SIZE_1_5x};
  line-height: 28px;
`

export const Reais = styled.Text`
  font-size: ${Fonts.SIZE_2x};
`
