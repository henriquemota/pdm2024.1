import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { PaperProvider } from 'react-native-paper'

// Importando as telas
import Home from './src/views/Home'
import Mapa from './src/views/Mapa'

// Cria o objeto de navegacao
const Stack = createNativeStackNavigator()


export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Mapa" component={Mapa} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  )
}