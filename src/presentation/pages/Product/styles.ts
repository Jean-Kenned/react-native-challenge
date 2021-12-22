import styled from 'styled-components/native'
import Colors from '@/presentation/helpers/colors'
import { Fonts, Spacing } from '@/presentation/helpers'
import FastImage from 'react-native-fast-image'

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
`

export const ShoppingBagWrapper = styled.View`
    transform: translate(0, 8px); 
`

export const Image = styled(FastImage)`
  width: 100%;
  height: 333px;
`

export const Name = styled.Text`
  color: ${Colors.NAME_PRODUCT_TEXT_COLOR};
  font-size: ${Fonts.SIZE_2_5x};
  text-align: center;
  font-weight: 600;
  margin-top: ${Spacing.SMALL};
`

export const MoreInfosContainer = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: ${Spacing.DEFAULT};
  flex-direction: row;
`

export const MoreInfoText = styled.Text`
  color: ${Colors.NAME_PRODUCT_TEXT_COLOR};
  font-size: ${Fonts.SIZE_1_8x};
  font-weight: 400;
  line-height: 24px;
  margin-left: ${Spacing.DEFAULT};
`

export const DescritionTitle = styled.Text`
  color: ${Colors.NAME_PRODUCT_TEXT_COLOR};
  font-size: ${Fonts.SIZE_3x};
  font-weight: 700;
  margin-top: ${Spacing.LARGE};
  padding-horizontal: ${Spacing.DEFAULT};
`

export const DescritionText = styled.Text`
  color: ${Colors.DESCRIPTION_PRODUCT_TEXT_COLOR};
  font-size: ${Fonts.SIZE_2x};
  font-weight: 400;
  line-height: 24px;
  margin-top: ${Spacing.SMALL};
  padding: ${Spacing.DEFAULT};
`
