import { Colors, Spacing } from '@/presentation/helpers'
import styled from 'styled-components/native'

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin-bottom: ${Spacing.MEDIUM};
`

export const Button = styled.View`
  height: 16px;
  width: 16px;
  border-radius: 16px;
  padding: 2px;
  border-color: ${Colors.DARK_GRAY};
  border-width: 1px;
  margin-right: ${Spacing.SMALL};
`

export const InnerButton = styled.View`
  flex: 1;
  background-color: ${Colors.LABEL_DISCOUNT_BACKGROUND_COLOR};
  border-radius: 16px;
`

export const Text = styled.Text`
 color: ${Colors.TITLE_TEXT_COLOR}
`
