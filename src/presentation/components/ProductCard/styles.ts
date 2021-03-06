import { Colors, Fonts, Spacing } from '@/presentation/helpers'
import FastImage from 'react-native-fast-image'
import styled from 'styled-components/native'

export const Container = styled.View`
  max-width: 300px;
  min-width: 150px;
  flex: 1;
  margin-bottom: ${Spacing.LARGE};
  margin-horizontal: ${Spacing.DEFAULT};
`

export const Card = styled.TouchableOpacity`
  elevation: 4;
  background-color: ${Colors.WHITE};
  border-radius: 4px;
  align-items: center;
  padding: ${Spacing.SMALL};
  width: 100%;
  margin-bottom: ${Spacing.SMALL};
  min-height: 350px;
`

export const Image = styled(FastImage)`
  width: 100%;
  height: 180px;
`

export const Title = styled.Text`
  color: ${Colors.TITLE_TEXT_COLOR};
  font-size: ${Fonts.SIZE_1_8x};
  text-align: center;
  font-weight: 700;
  line-height: 17px;
  margin-top: ${Spacing.SMALL};
`

export const DiscountWrapper = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: center;
  margin-top: ${Spacing.SMALL};
`

export const UndiscountedPrice = styled.Text`
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 12px;
  text-align: right;
  text-decoration-line: line-through;
  text-transform: uppercase;
  color: #888888;
  margin-right: ${Spacing.SMALL};
`

export const PriceMemberWrapper = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: ${Spacing.SMALL};
`

export const PriceMemberText = styled.Text`
  font-style: normal;
  font-weight: 300;
  font-size: 10px;
  line-height: 10px;
  text-align: right;
  text-transform: uppercase;
  color: ${Colors.MEMBER_TEXT_COLOR};
  margin-right: ${Spacing.SMALL};
`

export const NonMemberText = styled.Text`
  margin-top: ${Spacing.SMALL};
  font-style: normal;
  font-weight: normal;
  font-size: ${Fonts.SIZE_1_2x};
  line-height: 16px;
  text-align: center;
  text-transform: uppercase;
  color: ${Colors.NON_MEMBER_TEXT_COLOR};
`
