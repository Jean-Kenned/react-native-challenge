import React from 'react'
import Routes from '@/main/routes'
import { makeStorageContext as StorageProvider } from '@/main/factories/hooks'
import Toast from 'react-native-toast-message'

const App: React.FC = () => {
  return (
    <StorageProvider>
      <Routes/>
      <Toast position={'bottom'}/>
    </StorageProvider>
  )
}

export default App
