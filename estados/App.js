import { useState } from 'react'
import { Button, Text, View } from 'react-native'

export default function App() {
  const [numero, setNumero] = useState(0)

  const incrementar = function () {
    setNumero(numero + 1)
  }
  const decrementar = () => {
    setNumero(numero - 1)
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Text
        style={{
          fontSize: 64
        }}
      >
        {numero}
      </Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: 4,
        }}
      >
        <Button
          title='Incrementar'
          onPress={incrementar}
        />
        <Button
          title='Decrementar'
          onPress={decrementar}
        />
      </View>
    </View>
  )
}