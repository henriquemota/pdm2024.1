import React from 'react'
import { Alert, Button, Text, View } from 'react-native'

function App() {

  function sortear1() {
    const alunos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
    const indice = Math.floor(Math.random() * alunos.length)
    const numero = alunos[indice]
    Alert.alert(`Número sorteado', 'O número sorteado foi o ${numero}`)
  }

  function sortear2() {
    const frases = [
      { id: 1, frase: 'frase 1' },
      { id: 2, frase: 'frase 2' },
      { id: 3, frase: 'frase 3' },
      { id: 4, frase: 'frase 4' },
      { id: 5, frase: 'frase 5' },
      { id: 6, frase: 'frase 6' },
    ]
    const indice = Math.floor(Math.random() * frases.length)
    const { id, frase } = frases[indice]
    Alert.alert(`Frase`, `O número sorteado foi o ${frase}`)
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Text style={{ textAlign: 'center', fontSize: 32 }}>Sorteio</Text>
      <Button
        title='Clique para sortear'
        onPress={sortear2}
      />
    </View>
  )
}

export default App