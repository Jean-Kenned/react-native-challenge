import { Colors, Fonts, Spacing } from '@/presentation/helpers'
import styled from 'styled-components/native'

export const Container = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${Colors.BACKGROUND_SEARCH_INPUT_COLOR};
  border-radius: 10px;
  padding-left: ${Spacing.SMALL};
  height: 48px;
`

export const Input = styled.TextInput`
  color: ${Colors.PLACEHOLDER_SEARCH_INPUT_TEXT_COLOR};
  flex: 1;
  font-size: ${Fonts.SIZE_1_8x};
  margin-right: ${Spacing.DEFAULT};
  margin-left: ${Spacing.DEFAULT};
`
