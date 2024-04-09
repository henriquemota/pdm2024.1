import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Button, Text, View } from 'react-native'

const Home = () => {
  const { navigate } = useNavigation()

  return (
    <View>
      <Text>Home</Text>
      <Button
        title='vai para about'
        onPress={() => navigate('About')}
      />
      <Button
        title='vai para login'
        onPress={() => navigate('Login')}
      />
    </View>
  )
}

export default Home
