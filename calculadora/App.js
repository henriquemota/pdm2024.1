import { useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

export default function App() {
  const [memoria, setMemoria] = useState(0)
  const [operandos, setOperandos] = useState('0')
  const [operador, setOperador] = useState('')

  const botoes = []
  for (let i = 9; i >= 0; i--) botoes.push(i)
  botoes.push('CE')
  botoes.push('=')
  const operadores = ['+', '-', '*', '/']

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

  function handleButton(e) {
    if (e == 'CE') setOperandos('0') // limpar o display
    else if (e == '=') calcular() // calcula o resultado
    else setOperandos(operandos + e) // gravando os operandos
  }

  function handleButtonOperador(e) {
    setOperador(e) // grava o operador
    setMemoria(Number(operandos)) // grava o operando em memoria
    setOperandos('0') // limpa o display
  }

  function calcular() {
    let resultado = 0
    if (operador === '+') resultado = Number(memoria) + Number(operandos)
    else if (operador === '-') resultado = Number(memoria) - Number(operandos)
    else if (operador === '*') resultado = Number(memoria) * Number(operandos)
    else resultado = Number(memoria) / Number(operandos)
    setOperandos(String(resultado))
    setMemoria(0)
    setOperador()
  }

  return (
    <View style={estilos.container}>
      <TextInput
        style={estilos.input}
        readOnly
        value={operandos}
      />
      <View style={estilos.teclado}>
        <View style={estilos.containerBotoes}>
          {botoes.map((el, ix) =>
            <TouchableOpacity
              key={ix}
              style={estilos.botao}
              onPress={() => handleButton(el)}
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
              onPress={() => handleButtonOperador(el)}
            >
              <Text style={estilos.textoBotao}>{el}</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  )
}