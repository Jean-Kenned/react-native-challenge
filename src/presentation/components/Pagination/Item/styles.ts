import { Colors, Fonts, Spacing } from '@/presentation/helpers'
import styled from 'styled-components/native'

type NumberText = {
  isActive?: boolean
}

export const Number = styled.Text<NumberText>`
  color: ${(props: ContainerProps) => props.isActive ? Colors.ACTIVE_PAGINATION_BORDER_COLOR : Colors.BLACK};
  font-size: ${Fonts.SIZE_1_5x};
  font-weight: bold;
`

type ContainerProps = {
  isActive?: boolean
  isNumberType?: boolean
}

export const Container = styled.TouchableOpacity<ContainerProps>`
  height: 30px;
  width: 30px;
  border-radius: 10px;
  border-width: 2px;
  border-color: ${(props: ContainerProps) => props.isActive && props.isNumberType ? Colors.ACTIVE_PAGINATION_BORDER_COLOR : Colors.INACTIVE_PAGINATION_BORDER_COLOR};
  margin-left: ${Spacing.SMALL};
  align-items: center;
  justify-content: center;
`

export const Ellipsis = styled.Text`
  color:  ${Colors.BLACK};
  font-size: ${Fonts.SIZE_1_5x};
  font-weight: bold;
  flex: 1;
  justify-content: center;
  align-items: center; 
`
