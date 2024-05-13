import { createNativeStackNavigator } from '@react-navigation/native-stack'

// Importacao das telas
import Home from '../views/Home'
import Mapa from '../views/Mapa'

const Stack = createNativeStackNavigator()

const StackNav = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Mapa" component={Mapa} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  )
}

export default StackNav