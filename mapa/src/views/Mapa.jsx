import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import { Searchbar } from 'react-native-paper'
import useCEP from '../hooks/useCEP'

const Mapa = ({ route }) => {

  useEffect(() => {
    setCep(route?.params?.cep)
  }, [route.params])

  const [cep, setCep] = useState('')
  const { lat, lng, address_name } = route.params
  const [coordinate, setCoordinate] = useState({
    latitude: Number(lat),
    longitude: Number(lng),
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0821,
  })
  const { getCEP } = useCEP()

  return (
    <View style={{ flex: 1 }}>
      <Searchbar
        value={cep}
        onChangeText={setCep}
        onIconPress={() => {
          getCEP(cep)
            .then(({ lat, lng }) => setCoordinate({
              latitude: Number(lat),
              longitude: Number(lng),
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0821,
            }))
        }}
      />
      <MapView style={{ flex: 1 }} initialRegion={coordinate}>
        <Marker
          title='Opa, olha eu aqui'
          description={address_name}
          coordinate={coordinate}
          pinColor='#00ff77'
        />
      </MapView>
    </View>
  )
}

export default Mapa
