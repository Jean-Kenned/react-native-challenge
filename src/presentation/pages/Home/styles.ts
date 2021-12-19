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
    margin-bottom: ${Spacing.LARGE};
`

export const ShoppingBagWrapper = styled.View`
    transform: translate(0, 16px); 
`

export const SearchInputWrapper = styled.View`
     padding-horizontal: ${Spacing.DEFAULT};
`

export const Content = styled.ScrollView`
      padding-horizontal: ${Spacing.DEFAULT};
      padding-top: ${Spacing.LARGE};
      flex: 1;
`

export const CardsContainer = styled.View`
    margin-top: ${Spacing.MEDIUM};
    flex-wrap: wrap;
    flex-direction: row;
    flex: 1;
    justify-content: flex-start;
    padding-bottom: ${Spacing.LARGE};

`
