import { Colors, Fonts } from '@/presentation/helpers'
import styled from 'styled-components/native'

type ContainerProps = {
  isAddedInCart?: boolean
}

export const Container = styled.TouchableOpacity<ContainerProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 12px 24px;
  border-radius: 4px;
  background: ${(props: ContainerProps) => props.isAddedInCart ? Colors.REMOVE_BACKGROUND_BUTTON_COLOR : Colors.ADD_BACKGROUND_BUTTON_COLOR};
  height: 40px;
 `

export const Text = styled.Text`
  color: ${Colors.WHITE};
  font-size: ${Fonts.SIZE_2x};
  font-weight: bold;
  line-height: 16px;
`
