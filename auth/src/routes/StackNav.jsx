import AsyncStorage from '@react-native-async-storage/async-storage'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// Importacao das telas
import { useEffect, useState } from 'react'
import Auth from '../views/Auth'
import Home from '../views/Home'

const Stack = createNativeStackNavigator()

const StackNav = () => {
  const [initial, seetinitial] = useState(false)
  useEffect(() => {
    AsyncStorage.getItem('user').then(value => {
      seetinitial(value)
    })
  }, [])
  return (
    <Stack.Navigator initialRouteName={initial ? 'Home' : 'Auth'}>
      <Stack.Screen name="Auth" component={Auth} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  )
}

export default StackNav