import { useNavigation } from '@react-navigation/native'
import axios from 'axios'
import React, { useState } from 'react'
import { View } from 'react-native'
import { ActivityIndicator, Button, Card, Text, TextInput } from 'react-native-paper'

const Home = () => {
  const [loading, setLoading] = useState(false)
  const [cep, setCep] = useState('')
  const [address, setAddress] = useState(undefined)
  const { navigate } = useNavigation()

  const getAddress = () => {
    setLoading(true)
    axios
      .get(`https://cep.awesomeapi.com.br/json/${cep}`)
      .then(({ data }) => {
        const { address_name, address_type, city, district, lat, lng, state } = data
        setAddress({ address_name, address_type, city, district, lat, lng, state })
      })
      .catch((p) => {
        setAddress(undefined)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <View style={{ flex: 1, padding: 8 }}>
      <ActivityIndicator animating={loading} />
      <Card>
        <Card.Content>
          <TextInput
            label='CEP'
            keyboardType='number-pad'
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
