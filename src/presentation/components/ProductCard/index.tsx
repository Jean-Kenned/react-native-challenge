import React from 'react'
import { Container ,Card, Image, Title, UndiscountedPrice, DiscountWrapper, PriceMemberWrapper, PriceMemberText, NonMemberText } from './styles'
import FastImage from 'react-native-fast-image'
import { DiscountLabel, PriceMember, Button } from '@/presentation/components'
import { formatPrice } from './formatPrice'
import { ProductModel } from '@/domain/models'
import { useNavigation } from '@react-navigation/native'
import { ProductProps } from '@/main/routes/routes.types'
import { useStorage } from '@/presentation/hooks'

type Props = {
  product: ProductModel
  key?: string
}

const ProductCard = ({ product }: Props): React.FC => {
  const { image, priceNonMember, discount, priceMember, name } = product
  const navigation = useNavigation<ProductProps['navigation']>()
  const { checkIfAddedInCart,addOrRemoveProduct } = useStorage()

  return (
    <Container>
      <Card onPress={() => navigation.navigate('Product',{
        product: product
      })}>
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
      <Button onPress={async () => addOrRemoveProduct(product)} isAddedInCart={checkIfAddedInCart(product)}/>
    </Container>
  )
}

export default ProductCard
