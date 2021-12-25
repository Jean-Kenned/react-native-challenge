import styled from 'styled-components/native'
import Colors from '@/presentation/helpers/colors'
import { Fonts, Spacing } from '@/presentation/helpers'

export const Container = styled.View`
    background-color: ${Colors.PRIMARY_BACKGROUND_COLOR};
    flex: 1;
`

export const Header = styled.View`
    height: 70px;
    width: 100%;
    background-color: ${Colors.PRIMARY_BACKGROUND_COLOR};
    justify-content: space-between;
    flex-direction: row;
    padding: ${Spacing.DEFAULT};
    align-items: center;
    margin-bottom: ${Spacing.DEFAULT};
    elevation: 4;
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
    padding-bottom: ${Spacing.DEFAULT};
`

export const NoContentWrapper = styled.View`
        flex: 1;
        justify-content: center;
        align-items: center;
        margin-top: ${Spacing.SMALL};
        padding: ${Spacing.DEFAULT};
`

export const TextNoContent = styled.Text`
        color: ${Colors.DESCRIPTION_PRODUCT_TEXT_COLOR};
        font-size: ${Fonts.SIZE_2x};
        font-weight: 400;
        line-height: 24px;
        margin-top: ${Spacing.SMALL};
        padding: ${Spacing.DEFAULT};
`
