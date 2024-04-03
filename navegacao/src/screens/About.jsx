import { useNavigation } from '@react-navigation/native'
import * as React from 'react'
import { Button, Text, View } from 'react-native'

function AboutScreen() {
  const navigation = useNavigation()

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>About Screen</Text>
      <Button
        title='Voltar'
        onPress={() => navigation.goBack()}
      />
    </View>
  )
}

export default AboutScreen
export { AboutScreen }
