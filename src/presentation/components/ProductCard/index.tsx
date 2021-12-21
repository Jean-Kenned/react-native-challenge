import React from 'react'
import { Container ,Card, Image, Title, UndiscountedPrice, DiscountWrapper, PriceMemberWrapper, PriceMemberText, NonMemberText } from './styles'
import FastImage from 'react-native-fast-image'
import { DiscountLabel, PriceMember, Button } from '@/presentation/components'
import { formatPrice } from './formatPrice'
import { ProductModel } from '@/domain/models'

type Props = {
  product: ProductModel
  key?: string
}

const ProductCard = ({ product }: Props): React.FC => {
  const { image, priceNonMember, discount, priceMember, name } = product

  return (
    <Container>
      <Card>
        <Image
        resizeMode={FastImage.resizeMode.contain}
        source={{
          uri: image,
          priority: FastImage.priority.high
        }}/>
          <Title>{name}</Title>
          <DiscountWrapper>
            <UndiscountedPrice>{formatPrice(priceNonMember)}</UndiscountedPrice>
            <DiscountLabel text={`${discount}% OFF`}/>
          </DiscountWrapper>
          <PriceMemberWrapper>
            <PriceMemberText>
              {'Sócio\n Wine'}
            </PriceMemberText>
            <PriceMember price={priceMember}/>
          </PriceMemberWrapper>
          <NonMemberText>
            {`Não sócio ${formatPrice(priceNonMember)}`}
          </NonMemberText>
      </Card>
      <Button text={'Adicionar'}/>
    </Container>
  )
}

export default ProductCard
