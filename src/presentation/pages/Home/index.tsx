import React, { useEffect, useState } from 'react'
import { Container, Header, ShoppingBagWrapper, Content, CardsContainer, SearchInputWrapper, PaginationWrapper } from './styles'
import Logo from '@/presentation/assets/logo.svg'
import { ShoppingBag , SearchInput, Pagination, Loading , ProductCard, Filter, FilterModal } from '@/presentation/components'
import { LoadProducts } from '@/domain/usecases'
import { ProductModel } from '@/domain/models'
import { useStorage } from '@/presentation/hooks'
import { Option } from '@/presentation/components/RadioForm'
import { priceFilterOptions } from './priceFilterOptions'

type Props = {
  loadProducts: LoadProducts
}

const Home: React.FC<Props> = ({ loadProducts }: Props) => {
  const [products, setProducts] = useState<ProductModel[]>([])
  const [totalPages, setTotalPages] = useState<number>(0)
  const [totalItems, setTotalItems] = useState<number>(0)
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [loading,setLoading] = useState<boolean>(false)
  const [textSearch, setTextSearch] = useState<string>('')
  const [priceFilter,setPriceFilter] = useState<Option>(priceFilterOptions[0])
  const [filterModalVisible,setFilterModalVisible] = useState<boolean>(false)
  const pageLimit = 10
  const { loadAllProductsFromCart } = useStorage()

  useEffect(() => {
    setLoading(true)
    loadProducts.loadAll({ limit: pageLimit, page: 1, name: textSearch, filter: priceFilter.value }).then(response => {
      setProducts(response.items)
      setTotalPages(response.totalPages)
      setTotalItems(response.totalItems)
      setCurrentPage(1)
    }).catch()
      .finally(() => { 
        setLoading(false)
      })
  }, [textSearch, priceFilter])

  useEffect(() => {
    if(loading) return
    setLoading(true)
    loadProducts.loadAll({ limit: pageLimit, page: currentPage, name: textSearch, filter: priceFilter.value }).then(response => {
      setProducts(response.items)
      setTotalPages(response.totalPages)
      setTotalItems(response.totalItems)
    }).catch()
      .finally(() => setLoading(false))
  }, [currentPage])


  useEffect(() => {
    loadAllProductsFromCart()
  },[])

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
      <Filter productsFound={totalItems} onPress={() => setFilterModalVisible(true)}/>
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
      <FilterModal options={priceFilterOptions} currentFilter={priceFilter} setFilter={setPriceFilter} modalVisible={filterModalVisible} setModalVisible={setFilterModalVisible}/>
    </Container>
  )
}

export default Home
