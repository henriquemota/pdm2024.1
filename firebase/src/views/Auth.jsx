import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from 'firebase/auth'
import React, { useState } from 'react'
import { Alert, View } from 'react-native'
import { Button, TextInput } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'
import { auth } from '../services/firebase'

const Auth = () => {
  const [loading, setloading] = useState(false)
  const [user, setuser] = useState({ login: '', senha: '' })
  const { navigate } = useNavigation()

  const create = () => {
    setloading(true)
    createUserWithEmailAndPassword(auth, user.login, user.senha)
      .then((userCredential) => {
        const user = userCredential.user
        Alert.alert('Sucesso', 'Usuário criado com sucesso')
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        Alert.alert('Erro', errorMessage)
      })
      .finally(() => setloading(false))

  }

  const signin = () => {
    setloading(true)
    signInWithEmailAndPassword(auth, user.login, user.senha)
      .then(async ({ user }) => {
        await AsyncStorage.setItem('user', JSON.stringify(user))
        navigate("Home")
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        Alert.alert('Erro', errorMessage)
      })
      .finally(() => setloading(false))
  }

  return (
    <SafeAreaView style={{ gap: 4, padding: 8 }}>
      <TextInput
        label='Email'
        keyboardType='email-address'
        onChangeText={t => setuser({ ...user, login: t })}
      />
      <TextInput
        label='Senha'
        secureTextEntry
        onChangeText={t => setuser({ ...user, senha: t })}
      />
      <View style={{ flexDirection: 'row', justifyContent: 'center', paddingVertical: 16, gap: 8 }}>
        <Button mode='outlined' onPress={create} loading={loading}>
          Criar usuário
        </Button>
        <Button mode='outlined' onPress={signin} loading={loading}>
          Login
        </Button>
      </View>
    </SafeAreaView>
  )
}

export default Auth
