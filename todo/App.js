import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { PaperProvider } from 'react-native-paper'

// Importacao das rotas
import StackNav from './src/routes/StackNav'

const App = () => {
  return (
    <PaperProvider>
      <NavigationContainer>
        <StackNav />
      </NavigationContainer>
    </PaperProvider>
  )
}

export default App