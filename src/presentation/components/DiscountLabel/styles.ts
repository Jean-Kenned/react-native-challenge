import { Colors, Fonts, Spacing } from '@/presentation/helpers'
import styled from 'styled-components/native'

export const Container = styled.View`
  padding: 0px ${Spacing.SMALL};
  border-radius: 2px;
  background-color: ${Colors.LABEL_DISCOUNT_BACKGROUND_COLOR};
 `

export const Text = styled.Text`
  color: ${Colors.WHITE};
  font-size: ${Fonts.SIZE_1_5x};
  font-weight: normal;
  line-height: 16px;
`