import React from 'react'
import { Container } from './styles'
import Item, { ItemContentTypes } from './Item'

type Props = {
  setCurrentPage: CallableFunction
  pageQuantity: number
  currentPage: number
}

const Pagination = ({ setCurrentPage, pageQuantity, currentPage }: Props): React.FC => {
  const RenderItems = (): React.FC => {
    const items: React.FC[] = []
    for (let i = 1; i <= pageQuantity; i++) {
      items.push(<Item key={i} type={ItemContentTypes.NUMBER} number={i} isActive={currentPage === i} onPress={() => setCurrentPage(i)}/>)
    }

    return items
  }

  // TODO: Refactor this method
  const RenderManyItems = (): React.FC => {
    const items: React.FC[] = []
    items.push(<Item key={1} type={ItemContentTypes.NUMBER} number={1} isActive={currentPage === 1} onPress={() => setCurrentPage(1)}/>)

    if (currentPage > 2) {
      items.push(<Item key={Math.random()} type={ItemContentTypes.ELLIPSIS}/>)
      items.push(<Item key={currentPage - 1} type={ItemContentTypes.NUMBER} number={currentPage - 1} onPress={() => setCurrentPage(currentPage - 1)}/>)
    }

    if (currentPage !== 1 && currentPage !== pageQuantity) {
      items.push(<Item key={currentPage} type={ItemContentTypes.NUMBER} number={currentPage} isActive/>)
    }

    if (currentPage < pageQuantity - 1) {
      items.push(<Item key={currentPage + 1} type={ItemContentTypes.NUMBER} number={currentPage + 1} onPress={() => setCurrentPage(currentPage + 1)}/>)
    }

    if (currentPage < pageQuantity - 2) {
      items.push(<Item key={Math.random()}type={ItemContentTypes.ELLIPSIS}/>)
    }

    items.push(<Item key={pageQuantity} type={ItemContentTypes.NUMBER} number={pageQuantity} isActive={currentPage === pageQuantity} onPress={() => setCurrentPage(pageQuantity)}/>)

    return items
  }

  return (
    <Container>
      <Item type={ItemContentTypes.ARROW_BACK} {...currentPage - 1 >= 1 ? { onPress: () => setCurrentPage(currentPage - 1) } : {} } />
        {pageQuantity > 4 ? RenderManyItems() : RenderItems()}
      <Item type={ItemContentTypes.ARROW_FORTH} {...currentPage + 1 <= pageQuantity ? { onPress: () => setCurrentPage(currentPage + 1) } : {} } />
    </Container>
  )
}

export default Pagination
