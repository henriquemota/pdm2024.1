import React, { useState } from 'react'
import { View } from 'react-native'
import MapView, { Marker } from 'react-native-maps'


const Mapa = ({ route }) => {
  const address = route.params
  const [mapRegion, setmapRegion] = useState({
    latitude: Number(address.lat),
    longitude: Number(address.lng),
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  })
  return (
    <View style={{ flex: 1 }}>
      <MapView
        region={mapRegion}
        style={{ flex: 1 }}
      >
        <Marker coordinate={mapRegion} title='Marker' />
      </MapView>
    </View>
  )
}

export default Mapa
