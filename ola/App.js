import { Alert, Button, StyleSheet, Text, View } from 'react-native'

export default function App() {

  const estilos = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      gap: 4,
    },
    text: {
      alignSelf: 'center',
      fontSize: 30,
    }
  })

  function handleButton() {
    const alunos = []
    for (let index = 0; index < 100; index++) {
      const aluno = { nome: `Aluno ${index + 1}`, matricula: Math.random() }
      alunos.push(aluno)
    }
    const indice = Math.floor(Math.random() * alunos.length)
    Alert.alert('Sorteio', 'O aluno sorteado foi ' + alunos[indice].nome)
  }

  return (
    <View style={estilos.container}>
      <Text style={estilos.text}>Olá mundo</Text>
      <Button title='Clique aqui' onPress={handleButton} />
    </View>
  )
}