import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { View } from 'react-native'
import { ActivityIndicator, Button, Card, Text, TextInput } from 'react-native-paper'
import useCEP from '../hooks/useCEP'

const Home = () => {
  const [loading, setLoading] = useState(false)
  const [cep, setCep] = useState('')
  const [address, setAddress] = useState(undefined)
  const { navigate } = useNavigation()
  const { getCEP } = useCEP()

  const getAddress = () => {
    setLoading(true)
    getCEP(cep)
      .then(setAddress)
      .catch(setAddress)
      .finally(() => setLoading(false))
  }

  return (
    <View style={{ flex: 1, padding: 8 }}>
      <ActivityIndicator animating={loading} />
      <Card>
        <Card.Content>
          <TextInput
            label='CEP'
            keyboardType='number-pad'
            value={cep}
            onChangeText={setCep}
          />
        </Card.Content>
        <Card.Actions>
          <Button onPress={getAddress}>
            Pesquisar
          </Button>
        </Card.Actions>
      </Card>

      {address &&
        <Card style={{ marginTop: 32 }}>
          <Card.Title title="Endereço" />
          <Card.Content>
            <Text>Endereço: {address.address_type} {address.address_name}</Text>
            <Text>Bairro: {address.district}</Text>
            <Text>Cidade/Estado: {address.city} / {address.state}</Text>
            <Text>lat/lng: {address.lat}/{address.lng}</Text>
          </Card.Content>
          <Card.Actions>
            <Button onPress={() => navigate('Mapa', { ...address })}>
              Ver no mapa
            </Button>
          </Card.Actions>
        </Card>
      }

    </View>
  )
}

export default Home
