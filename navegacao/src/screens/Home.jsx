import { useNavigation } from '@react-navigation/native'
import * as React from 'react'
import { Button, Text, View } from 'react-native'

function HomeScreen() {
  const navigation = useNavigation()

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title='About'
        onPress={() => navigation.navigate('About')}
      />
    </View>
  )
}

export default HomeScreen
export { HomeScreen }
