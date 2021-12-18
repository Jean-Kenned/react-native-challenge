import { Colors, Fonts } from '@/presentation/helpers'
import styled from 'styled-components/native'

export const Container = styled.View`
    width: 56px;
    height: 56px;
`

export const Counter = styled.View`
    width: 20px;
    height: 20px;
    background-color: ${Colors.WHITE};
    position: absolute;
    left: 64.29%;
    right: 0%;
    top: 64.29%;
    bottom: 0%;
    border-radius: 10px;
    align-items: center;
    font-size: ${Fonts.SIZE_1_5x};
`

export const Number = styled.Text`
  color: ${Colors.SHOPPING_BAG_NUMBER_COLOR};
`
