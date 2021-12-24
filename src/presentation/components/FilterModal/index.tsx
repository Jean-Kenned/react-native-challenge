import React from 'react'
import { Modal } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { Container, CenteredContent, Content, Title, CloseIconWrapper } from './styles'
import { RadioForm } from '@/presentation/components'
import { Option } from '@/presentation/components/RadioForm'
import { Colors } from '@/presentation/helpers'

type Props = {
  setFilter: CallableFunction
  currentFilter: Option
  options: Option[]
  modalVisible: boolean
  setModalVisible: CallableFunction
}

const FilterModal = ({ setFilter, currentFilter, options, modalVisible, setModalVisible }: Props): React.FC => {
  React.useEffect(() => {
    setModalVisible(false)
  },[currentFilter])

  return (
    <Container>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible)
        }}>
        <CenteredContent>
          <Content>
            <CloseIconWrapper>
              <FontAwesome5
                style={{ padding: 8 }}
                name={'times'}
                solid
                color={Colors.BLACK}
                size={24}
                onPress={() => setModalVisible(false)}
              />
            </CloseIconWrapper>
            <Title>
              Filtre por Preço
            </Title>
            <RadioForm options={options} value={currentFilter} setValue={setFilter} />
          </Content>
        </CenteredContent>
      </Modal>
    </Container>
  )
}

export default FilterModal
