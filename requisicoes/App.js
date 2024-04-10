import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { PaperProvider } from 'react-native-paper'

// Views
import Home from './src/views/Home'

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
          {/* <Nav.Screen name="Settings" component={SettingsScreen} /> */}
        </Nav.Navigator>
      </NavigationContainer>
    </PaperProvider>
  )
}