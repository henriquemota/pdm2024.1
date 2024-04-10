import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { PaperProvider } from 'react-native-paper'

// Views
import Home from './src/views/Home'
import Mapa from './src/views/Mapa'

const Nav = createNativeStackNavigator()

export default function App() {

  return (
    <PaperProvider>
      <NavigationContainer>
        <Nav.Navigator>
          <Nav.Screen
            name="Home"
            component={Home}
          />
          <Nav.Screen
            name="Mapa"
            component={Mapa}
          />
        </Nav.Navigator>
      </NavigationContainer>
    </PaperProvider>
  )
}