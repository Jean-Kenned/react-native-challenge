import styled from 'styled-components/native'
import Colors from '@/presentation/helpers/colors'
import { Fonts, Spacing } from '@/presentation/helpers'

export const Container = styled.View`
    width: 100%;
    padding: ${Spacing.DEFAULT};
    flex-direction: row;
    elevation: 1;
    border-top-width: 2px;
    border-color: transparent;
`

export const DiscountLabelWrapper = styled.View`
  position:absolute;
  left: ${Spacing.DEFAULT};
  transform: translate(0, -8px); 
`

export const UndiscountedPrice = styled.Text`
  font-style: normal;
  font-weight: 700;
  font-size: ${Fonts.SIZE_1_8x};
  text-decoration-line: line-through;
  text-transform: uppercase;
  color: ${Colors.FOOTER_UNDICOUNTED_PRICE};
`

export const PriceMember = styled.Text`
  color: ${Colors.PRICE_MEMBER_TEXT_COLOR};
  font-style: normal;
  font-weight: bold;
  font-size: ${Fonts.SIZE_3x};
`

export const NoMemberText = styled.Text`
  color: ${Colors.FOOTER_UNDICOUNTED_PRICE};
  font-style: normal;
  font-weight: 600;
  font-size: ${Fonts.SIZE_1_5x};
  text-transform: uppercase;
`

export const PriceInfosWrapper = styled.View`
  flex: 1;
  padding-top: ${Spacing.SMALL};
`

export const ButtonWrapper = styled.View`
  justify-content: center;
  flex: 1;
`
