import React from 'react'
import SearchIcon from '@/presentation/assets/search.svg'
import { Container, Input } from './styles'
import { Colors } from '@/presentation/helpers'

const SearchInput = (): React.FC => {
  return (
    <Container>
        <SearchIcon/>
        <Input
            underlineColorAndroid="transparent"
            placeholder="O que você está procurando?"
            placeholderTextColor={Colors.PLACEHOLDER_SEARCH_INPUT_TEXT_COLOR}
            returnKeyType="search"
        />
    </Container>
  )
}

export default SearchInput
