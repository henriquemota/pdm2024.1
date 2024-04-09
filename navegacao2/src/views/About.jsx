import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Button, Text, View } from 'react-native'

const About = () => {
  const { navigate } = useNavigation()

  return (
    <View>
      <Text>About</Text>
      <Button
        title='vai para home'
        onPress={() => navigate('Home')}
      />
    </View>
  )
}

export default About
