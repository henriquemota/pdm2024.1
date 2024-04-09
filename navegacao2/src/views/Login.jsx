import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View } from 'react-native'
import { Button, Card, Text } from 'react-native-paper'

const Login = () => {
  const { navigate } = useNavigation()

  return (
    <View style={{ padding: 16 }}>
      <Card>
        <Card.Title title='Login' />
        <Card.Content>
          <Text variant='displayLarge'>Login</Text>
          <Button
            mode='contained'
            icon='home'
            onPress={() => navigate('Auth')}
          >
            Login
          </Button>
        </Card.Content>
      </Card>
    </View>
  )
}

export default Login
