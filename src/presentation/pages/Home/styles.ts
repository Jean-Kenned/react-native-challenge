import styled from 'styled-components/native'
import Colors from '@/presentation/helpers/colors'
import { Spacing } from '@/presentation/helpers'

export const Container = styled.View`
    background-color: ${Colors.PRIMARY_BACKGROUND_COLOR};
    flex: 1;
`

export const Header = styled.View`
    height: 70px;
    width: 100%;
    background-color: ${Colors.WHITE};
    justify-content: space-between;
    flex-direction: row;
    padding: ${Spacing.DEFAULT};
    align-items: center;
    elevation: 4;
`

export const ShoppingBagWrapper = styled.View`
    transform: translate(0, 16px); 
`
