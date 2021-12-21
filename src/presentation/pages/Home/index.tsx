import React, { useEffect, useState } from 'react'
import { Container, Header, ShoppingBagWrapper, Content, CardsContainer, SearchInputWrapper, PaginationWrapper } from './styles'
import Logo from '@/presentation/assets/logo.svg'
import { ShoppingBag , SearchInput, ProductCard, Pagination, Loading } from '@/presentation/components'
import { LoadProducts } from '@/domain/usecases'
import { ProductModel } from '@/domain/models'

type Props = {
  loadProducts: LoadProducts
}

const Home: React.FC<Props> = ({ loadProducts }: Props) => {
  const [products, setProducts] = useState<ProductModel[]>([])
  const [totalPages, setTotalPages] = useState<number>(0)
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [loading,setLoading] = useState<boolean>(false)
  const [textSearch, setTextSearch] = useState<string>('')
  const pageLimit = 10

  useEffect(() => {
    setLoading(true)
    loadProducts.loadAll({ limit: pageLimit, page: currentPage, name: textSearch }).then(response => {
      setProducts(response.items)
      setTotalPages(response.totalPages)
    }).catch()
      .finally(() => setLoading(false))
  }, [currentPage, textSearch])

  return (
    <Container>
      <Header>
        <Logo/>
        <ShoppingBagWrapper>
          <ShoppingBag/>
        </ShoppingBagWrapper>
      </Header>
      <SearchInputWrapper>
       <SearchInput onChangeText={setTextSearch} value={textSearch}/>
      </SearchInputWrapper>
      {loading
        ? <Loading/>
        : <Content>
        <CardsContainer>
          {products.map((product, index) => <ProductCard key={index} product={product}/>)}
        </CardsContainer>
        <PaginationWrapper>
          <Pagination pageQuantity={totalPages} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
        </PaginationWrapper>
        </Content>
      }
    </Container>
  )
}

export default Home
