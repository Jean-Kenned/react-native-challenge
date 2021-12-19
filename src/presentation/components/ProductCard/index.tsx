import React from 'react'
import { Container ,Card, Image, Title, UndiscountedPrice, DiscountWrapper, PriceMemberWrapper, PriceMemberText, NonMemberText } from './styles'
import FastImage from 'react-native-fast-image'
import { DiscountLabel, PriceMember } from '@/presentation/components'
import { formatPrice } from './formatPrice'
import Button from '../Button'

const ProductCard = (): React.FC => {
  return (
    <Container>
      <Card>
        <Image
        resizeMode={FastImage.resizeMode.contain}
        source={{
          uri: 'https://www.wine.com.br/cdn-cgi/image/f=png,h=515,q=99/assets-images/produtos/19694-01.png',
          priority: FastImage.priority.high
        }}/>
          <Title>Toro Loco D.O.P. Utiel-Requena Tempranillo 2017</Title>
          <DiscountWrapper>
            <UndiscountedPrice>{formatPrice(30.40)}</UndiscountedPrice>
            <DiscountLabel text={`${15}% OFF`}/>
          </DiscountWrapper>
          <PriceMemberWrapper>
            <PriceMemberText>
              {'Sócio\n Wine'}
            </PriceMemberText>
            <PriceMember price={30}/>
          </PriceMemberWrapper>
          <NonMemberText>
            {`Não sócio ${formatPrice(30)}`}
          </NonMemberText>
      </Card>
      <Button text={'Adicionar'}/>
    </Container>
  )
}

export default ProductCard
