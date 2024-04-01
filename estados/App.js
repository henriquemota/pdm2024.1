import { useEffect, useState } from 'react'
import { Button, Text, View } from 'react-native'

export default function App() {
  const [numero, setNumero] = useState(0)
  const [cor, setCor] = useState('#000')

  useEffect(function () {
    numero >= 0 ? setCor('#000') : setCor('#ff0000')
  }, [numero])

  function incrementa() {
    setNumero(numero + 1)
  }
  function decrementa() {
    setNumero(numero - 1)
  }

  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      gap: 4,
    }}>
      <Text style={{
        fontSize: 48,
        fontWeight: 'bold',
        color: cor,
      }}>
        {numero}
      </Text>
      <View style={{
        flexDirection: 'row',
        gap: 4,
      }}>
        <Button
          title='Incrementar'
          onPress={incrementa}
        />
        <Button
          title='Decrementar'
          onPress={decrementa}
        />
      </View>
    </View>
  )
}