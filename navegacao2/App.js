import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { MD3LightTheme as DefaultTheme, PaperProvider } from 'react-native-paper'

// Importacao das janelas
import About from './src/views/About'
import Home from './src/views/Home'
import Login from './src/views/Login'

// Customizacao do tema
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    secondary: 'yellow',
  },
}

// Controi o objeto JSX de navegacao Stack
const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

const Auth = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Home' component={Home} />
      <Tab.Screen name='About' component={About} />
    </Tab.Navigator>
  )
}

const App = () => {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Login' component={Login} />
          <Stack.Screen name='Auth' component={Auth} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  )
}

export default App