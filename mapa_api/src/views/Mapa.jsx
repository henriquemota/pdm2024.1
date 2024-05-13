import axios from 'axios'
import { addDoc, collection, getDoc } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { Alert } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import { Searchbar } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'
import { db } from '../services/firebase'

const Mapa = () => {
  const [markers, setmarkers] = useState([])
  const [loading, setloading] = useState(false)
  const [cep, setcep] = useState()
  const [coordinate, setCoordinate] = useState({
    latitude: -3.728597,
    longitude: -38.4762412,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0821,
  })
  const marcadores = collection(db, "marcadores")

  useEffect(() => {
  }, [])

  const getmarcadores = async () => {
    const data = []
    try {
      setloading(true)
      const e = await getDoc(marcadores)
      e.forEach(doc => data.push({ id: doc.id, ...doc.data() }))
    } catch (error) {
      Alert.alert("Atenção", "Erros ocorreram")
    } finally {
      setmarkers(data)
      setloading(false)
    }
  }

  const getaddress = async () => {
    if (cep.length === 8) {
      setloading(true)
      try {
        const { data } = await axios.get("https://cep.awesomeapi.com.br/json/" + cep)
        const temporario = {
          coordinate: {
            latitude: Number(data.lat),
            longitude: Number(data.lng),
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0821,
          },
          address: data.address,
          city: data.city,
          state: data.state,
          district: data.district,
        }

        // grava o marcador no banco de dados
        await addDoc(marcadores, temporario)
        // grava o marcador no estado
        setmarkers([...markers, temporario])

      } catch (error) {
        Alert.alert("Atenção", "Erros ocorreram")
      } finally {
        setloading(false)
      }

    } else
      Alert.alert("Atenção", "O CEP precisa ter 8 caracteres")
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Searchbar
        onChangeText={setcep}
        value={cep}
        onIconPress={getaddress}
        onSubmitEditing={getaddress}
        keyboardType='numeric'
        loading={loading}
      />
      <MapView style={{ flex: 1 }} initialRegion={coordinate}>
        {markers.map((el, ix) =>
          <Marker
            key={ix}
            title={el.address}
            coordinate={el.coordinate}
          />
        )}
      </MapView>
    </SafeAreaView>
  )
}

export default Mapa
