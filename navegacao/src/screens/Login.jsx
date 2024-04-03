import { useState, } from 'react'
import { View } from 'react-native'
import { Button, Text, TextInput } from 'react-native-paper'
import { useLogin } from '../hooks'

function LoginScreen() {
  const [user, setUser] = useState({ email: '', senha: '' })
  const { sigin } = useLogin()

  return (
    <View
      style={{
        flex: 1,
        gap: 8,
        padding: 8,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <View
        style={{ width: '100%' }}
      >
        <Text
          variant="headlineSmall"
        >
        </Text>
        <TextInput
          label="Email"
          mode="outlined"
          keyboardType='email-address'
          autoCapitalize='none'
          value={user?.email}
          onChangeText={text => setUser({ ...user, email: text })}
        />
        <TextInput
          label="Senha"
          mode="outlined"
          keyboardType='default'
          secureTextEntry
          value={user?.senha}
          onChangeText={text => setUser({ ...user, senha: text })}
        />
        <Button
          icon="home"
          mode='contained-tonal'
          style={{
            marginVertical: 16,
          }}
          onPress={() => sigin(user)}
        >
          Login
        </Button>
      </View>
    </View>
  )
}

export default LoginScreen
export { LoginScreen }
