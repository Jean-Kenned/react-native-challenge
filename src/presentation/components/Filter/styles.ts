import { Colors, Fonts, Spacing } from '@/presentation/helpers'
import styled from 'styled-components/native'

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: ${Spacing.SMALL};
  padding-horizontal: ${Spacing.DEFAULT};
  background: ${Colors.PRIMARY_BACKGROUND_COLOR};
 `

export const IconWrapper = styled.TouchableOpacity`

`

export const Text = styled.Text`
  color: ${Colors.FILTER_TEXT_COLOR};
  font-size: ${Fonts.SIZE_2x};
  line-height: 16px;
`
