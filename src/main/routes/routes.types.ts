import { ProductModel } from '@/domain/models'
import { StackScreenProps } from '@react-navigation/stack'

export type RootStackParamList = {
  Home: undefined
  Product: {product: ProductModel}
}

export type HomeProps = StackScreenProps<
RootStackParamList,
'Home'
>

export type ProductProps = StackScreenProps<
RootStackParamList,
'Product'
>
