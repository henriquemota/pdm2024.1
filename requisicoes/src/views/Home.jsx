import { useNavigation } from '@react-navigation/native'
import axios from 'axios'
import React, { useState } from 'react'
import { View } from 'react-native'
import { ActivityIndicator, Button, Card, Text, TextInput } from 'react-native-paper'

const Home = () => {
  const [loading, setLoading] = useState(false)
  const [cep, setCEP] = useState('')
  const [address, setAddress] = useState(undefined)
  const { navigate } = useNavigation()

  const handleCEP = () => {
    setLoading(true)
    axios
      .get('https://cep.awesomeapi.com.br/json/' + cep)
      .then(({ data }) => {
        const { address, city, lat, lng, district, state } = data
        setAddress({ address, city, lat, lng, district, state })
      })
      .catch((param) => {
        console.log('deu ruim', param)
        setAddress(undefined)
      })
      .finally(() => setLoading(false))
  }

  return (
    <View style={{ padding: 8 }}>
      <ActivityIndicator animating={loading} />
      <Card>
        <Card.Title title="Informe o CEP para pesquisar" />
        <Card.Content>
          <TextInput
            label="Informe o CEP"
            keyboardType='number-pad'
            onChangeText={setCEP}
          />
        </Card.Content>
        <Card.Actions>
          <Button
            onPress={handleCEP}
          >
            Pesquisar
          </Button>
        </Card.Actions>
      </Card>
      {address &&
        <Card style={{ marginTop: 16 }}>
          <Card.Title title="Endereço" />
          <Card.Content>
            <Text>Endereço: {address?.address}</Text>
            <Text>Bairro: {address?.district}</Text>
            <Text>Cidade / Estado: {address?.city} / {address?.state}</Text>
          </Card.Content>
          <Card.Actions>
            <Button
              onPress={() => navigate('Mapa', { ...address })}
            >
              Ver no mapa
            </Button>
          </Card.Actions>
        </Card>
      }
    </View>
  )
}

export default Home
