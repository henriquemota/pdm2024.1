import React, { useState } from 'react'
import { View } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import { Searchbar } from 'react-native-paper'

const Mapa = ({ route }) => {
  const { lat, lng, address_name } = route.params
  const [coordinate, setCoordinate] = useState({
    latitude: Number(lat),
    longitude: Number(lng),
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0821,
  })

  return (
    <View style={{ flex: 1 }}>
      <Searchbar
        onChangeText={text => console.log(text)}
        onIconPress={() => console.log('apertou')}
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
