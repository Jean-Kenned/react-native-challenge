import React from 'react'
import Routes from '@/main/routes'
import { makeStorageContext as StorageProvider } from '@/main/factories/hooks'

const App: React.FC = () => {
  return (
    <StorageProvider>
      <Routes/>
    </StorageProvider>
  )
}

export default App
