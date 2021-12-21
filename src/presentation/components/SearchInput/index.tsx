import React from 'react'
import SearchIcon from '@/presentation/assets/search.svg'
import { Container, Input } from './styles'
import { Colors } from '@/presentation/helpers'

type Props = {
  onChangeText: CallableFunction
  value: string
}


const SearchInput = ({onChangeText, value}:Props): React.FC => {
  return (
    <Container>
        <SearchIcon/>
        <Input
            onChangeText={onChangeText}
            value={value}
            underlineColorAndroid="transparent"
            placeholder="O que você está procurando?"
            placeholderTextColor={Colors.PLACEHOLDER_SEARCH_INPUT_TEXT_COLOR}
            returnKeyType="search"
        />
    </Container>
  )
}

export default SearchInput
