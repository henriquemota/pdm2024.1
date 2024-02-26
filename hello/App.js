import React from 'react'
import { Alert, Button, Text, View } from 'react-native'

function App() {

  function sortear() {
    const alunos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
    const indice = Math.floor(Math.random() * alunos.length)
    const numero = alunos[indice]
    Alert.alert(`Número sorteado', 'O número sorteado foi o ${numero}`)
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Text style={{ textAlign: 'center', fontSize: 32 }}>Sorteio</Text>
      <Button
        title='Clique para sortear'
        onPress={sortear}
      />
    </View>
  )
}

export default App