import React from 'react'
import {
  Container,
  DiscountLabelWrapper,
  UndiscountedPrice,
  PriceMember,
  NoMemberText,
  ButtonWrapper,
  PriceInfosWrapper
} from './styles'
import { ProductModel } from '@/domain/models'
import { Button, DiscountLabel } from '@/presentation/components'
import { formatPrice } from '@/presentation/components/ProductCard/formatPrice'
import { useStorage } from '@/presentation/hooks'

type Props = {
  product: ProductModel
}

const Footer: React.FC<Props> = ({ product }: Props) => {
  const { priceNonMember, priceMember } = product
  const { checkIfAddedInCart,addOrRemoveProduct } = useStorage()

  return (
    <Container>
      <PriceInfosWrapper>
        <DiscountLabelWrapper>
          <DiscountLabel text={'15% OFF'} />
        </DiscountLabelWrapper>
        <UndiscountedPrice>{formatPrice(priceNonMember)}</UndiscountedPrice>
        <PriceMember>{formatPrice(priceMember)}</PriceMember>
        <NoMemberText>{`Preço não-sócio ${formatPrice(
          priceNonMember
        )}`}</NoMemberText>
      </PriceInfosWrapper>
      <ButtonWrapper>
        <Button onPress={async () => addOrRemoveProduct(product)} isAddedInCart={checkIfAddedInCart(product)}/>
      </ButtonWrapper>
    </Container>
  )
}

export default Footer
