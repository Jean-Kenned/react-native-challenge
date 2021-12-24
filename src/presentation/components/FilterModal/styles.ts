import { Colors, Fonts, Spacing } from '@/presentation/helpers'
import styled from 'styled-components/native'

export const Container = styled.View`
  justify-content: center;
  align-items: center;
 `

export const CenteredContent = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-top: ${Spacing.LARGE};
`

export const Content = styled.View`
  margin: ${Spacing.LARGE};
  background-color: ${Colors.WHITE};
  border-radius: 20px;
  padding: ${Spacing.LARGE};
  align-items: center;
  justify-content: center;
  elevation: 5;
  shadow-color: #000;
  shadow-opacity: 0.25px;
  shadow-radius: 4px;
`

export const Title = styled.Text`
  color: ${Colors.TITLE_TEXT_COLOR};
  font-size: ${Fonts.SIZE_1_8x};
  text-align: center;
  font-weight: 700;
  line-height: 17px;
  margin-top: ${Spacing.SMALL};
`

export const CloseIconWrapper = styled.View`
  position: absolute;
  right: ${Spacing.DEFAULT};
  top: ${Spacing.DEFAULT};
`
