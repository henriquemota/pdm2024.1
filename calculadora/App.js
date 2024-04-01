import { useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

export default function App() {
  const estilos = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#555',
    },
    input: {
      padding: 32,
      fontSize: 32,
      backgroundColor: 'rgba(255,255,255,0.6)',
      borderRadius: 8,
      marginHorizontal: 8,
      marginTop: 32,
      marginBottom: 32,
    },
    teclado: {
      flexDirection: 'row',
    },
    containerBotoes: {
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: 8,
    },
    containerOperadores: {
      width: 120,
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: 8,
    },
    botao: {
      width: 80,
      height: 80,
      borderRadius: 40,
      backgroundColor: 'rgba(255,255,255,0.6)',
      justifyContent: 'center',
      alignItems: 'center'
    },
    textoBotao: {
      fontWeight: 'bold',
      fontSize: 32
    },

  })
  const [memoria, setMemoria] = useState([0, 0, undefined])
  // memoria[0] => primeiro operando
  // memoria[1] => segundo operando
  // memoria[2] => operador

  const a2 = ['=', 'CE']
  const a1 = []
  for (let i = 9; i >= 0; i--) a1.push(i)
  const operandos = [...a1, ...a2]
  const operadores = ['+', '-', '*', '/']

  function handleButton(value) {
    const local = [...memoria]
    if (operadores.includes(value)) {
      local[2] = value
      local[1] = local[0]
      local[0] = 0
    }
    else if (value == 'CE') local[0] = 0
    else if (value == '=') {
      if (local[2] === '+') local[0] = local[1] + local[0]
      else if (local[2] === '-') local[0] = local[1] - local[0]
      else if (local[2] === '*') local[0] = local[1] * local[0]
      else local[0] = local[1] / local[0]
      local[1] = 0
      local[2] = undefined
    }
    else local[0] = Number(String(local[0]) + value)
    setMemoria(local)
  }

  return (
    <View style={estilos.container}>
      <TextInput
        style={estilos.input}
        readOnly
        value={String(memoria[0])}
      />
      <View style={estilos.teclado}>
        <View style={estilos.containerBotoes}>
          {operandos.map((el, ix) =>
            <TouchableOpacity
              key={ix}
              style={estilos.botao}
              onPress={function () { handleButton(el) }}
            >
              <Text style={estilos.textoBotao}>{el}</Text>
            </TouchableOpacity>
          )}
        </View>
        <View style={estilos.containerOperadores}>
          {operadores.map((el, ix) =>
            <TouchableOpacity
              key={ix}
              style={estilos.botao}
              onPress={function () { handleButton(el) }}
            >
              <Text style={estilos.textoBotao}>{el}</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  )
}