import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'


export default function App() {

  function handleButton(button) {
    console.log(button)
  }

  // cria os estilos 
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingVertical: 16,
      backgroundColor: '#555',
    },
    input: {
      backgroundColor: 'rgba(255,255,255,0.4)',
      margin: 16,
      padding: 16,
      borderRadius: 4,
      fontSize: 32,
    },
    containerGeral: {
      flexDirection: 'row',
      margin: 16,
    },
    containerBotoes: {
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'center',
      gap: 4,
    },
    containerOperadores: {
      alignItems: 'center',
      width: 80,
      gap: 4,
    },
    button: {
      backgroundColor: '#c3c3c3',
      height: 80,
      width: 80,
      borderRadius: 8,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      fontSize: 32,
      fontWeight: 'bold'
    },

  })

  // cria o array de botoes 
  const botoes = []
  for (let i = 9; i >= 0; i--) botoes.push(i)
  botoes.push('CE')
  botoes.push('=')
  // cria o array de operadores
  const operadores = ['+', '-', '*', '/']

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} />
      <View style={styles.containerGeral}>
        <View style={styles.containerBotoes}>
          {botoes.map((el, ix) =>
            <TouchableOpacity
              key={ix}
              style={styles.button}
              onPress={() => handleButton(el)}
            >
              <Text style={styles.text}>{el}</Text>
            </TouchableOpacity>
          )}
        </View>
        <View style={styles.containerOperadores}>
          {operadores.map((el, ix) =>
            <TouchableOpacity
              key={ix}
              style={styles.button}
              onPress={() => handleButton(el)}
            >
              <Text style={styles.text}>{el}</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  )
}

