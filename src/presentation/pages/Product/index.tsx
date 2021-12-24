import React from 'react'
import { Container, Header, ShoppingBagWrapper, Image, Name, MoreInfosContainer, MoreInfoText, DescritionTitle, DescritionText } from './styles'
import { ShoppingBag } from '@/presentation/components'
import { ProductProps } from '@/main/routes/routes.types'
import { Colors } from '@/presentation/helpers'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import FastImage from 'react-native-fast-image'
import { SvgUri } from 'react-native-svg'
import Footer from './Footer'
import { ScrollView } from 'react-native'

const Product: React.FC = ({ navigation, route }: ProductProps) => {
  const product = route?.params?.product
  const { image, name, flag, country, type, classification, size, sommelierComment } = product

  return (
    <Container>
      <Header>
        <FontAwesome5
          style={{ padding: 8 }}
          name={'chevron-left'}
          solid
          color={Colors.BLACK}
          size={24}
          onPress={() => navigation.goBack()}
        />
        <ShoppingBagWrapper>
          <ShoppingBag />
        </ShoppingBagWrapper>
      </Header>
      <ScrollView contentContainerStyle={{ paddingBottom: 32 }}>
        <Image
          resizeMode={FastImage.resizeMode.contain}
          source={{
            uri: image,
            priority: FastImage.priority.high
          }}
        />
        <Name>{name}</Name>
        <MoreInfosContainer>
          <SvgUri width="20px" height="20px" uri={flag} />
          <MoreInfoText>{country}</MoreInfoText>
          <MoreInfoText>{type}</MoreInfoText>
          <MoreInfoText>{classification}</MoreInfoText>
          <MoreInfoText>{size}</MoreInfoText>
        </MoreInfosContainer>
        <DescritionTitle>DESCRIÇÃO</DescritionTitle>
        <DescritionText>{sommelierComment}</DescritionText>
      </ScrollView>
      <Footer product={product}/>
    </Container>
  )
}

export default Product
