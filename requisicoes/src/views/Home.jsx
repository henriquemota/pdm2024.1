import axios from 'axios'
import React, { useState } from 'react'
import { View } from 'react-native'
import { ActivityIndicator, Button, Card, Text, TextInput } from 'react-native-paper'

const Home = () => {
  const [loading, setLoading] = useState(false)
  const [cep, setCEP] = useState('')
  const [address, setAddress] = useState(undefined)

  const handleCEP = () => {
    setLoading(true)
    axios
      .get('https://cep.awesomeapi.com.br/json/' + cep)
      .then(({ data }) => {
        const { address, city, lat, lng, district, state } = data
        setAddress({ address, city, lat, lng, district, state })
        console.log('deu certo', data)
      })
      .catch((param) => {
        console.log('deu ruim', param)
      })
      .finally(() => setLoading(false))
  }

  return (
    <View style={{ padding: 8 }}>
      <ActivityIndicator animating={loading} />
      <Card>
        <Card.Title title="Dados do Endereço" />
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
      <Text>
        {JSON.stringify(address)}
      </Text>
    </View>
  )
}

export default Home
