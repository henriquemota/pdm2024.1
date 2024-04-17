import { createNativeStackNavigator } from '@react-navigation/native-stack'

// Importacao das telas
import Home from '../views/Home'

const Stack = createNativeStackNavigator()

const StackNav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  )
}

export default StackNav