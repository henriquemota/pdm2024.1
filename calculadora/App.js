import { useEffect, useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

export default function App() {
  const [botoes, setBotoes] = useState([])
  const [operadores, setOperadores] = useState([])
  const [memoria, setMemoria] = useState([0, 0, undefined])

  useEffect(() => {
    // cria os botoes
    let _botoes = []
    for (let i = 9; i >= 0; i--) _botoes.push(i)
    _botoes.push('CE')
    _botoes.push('=')
    setBotoes(_botoes)
    // cria os operadores
    setOperadores(['+', '-', '*', '/'])
  }, [])

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
    let _memoria = [...memoria] //recebe do estado para variavel local

    if (e == 'CE') _memoria[0] = 0
    else if (['+', '-', '*', '/'].includes(e)) {
      _memoria[1] = _memoria[0]
      _memoria[0] = 0
      _memoria[2] = e
    }
    else if (e === '=') {
      _memoria[0] = calcular()
      _memoria[1] = 0
      _memoria[2] = undefined
    }
    else _memoria[0] = String(_memoria[0]) === '0' ? e : String(_memoria[0]) + e

    setMemoria(_memoria)
  }

  function calcular() {
    if (memoria[2] === '+') return Number(memoria[1]) + Number(memoria[0])
    else if (memoria[2] === '-') return Number(memoria[1]) - Number(memoria[0])
    else if (memoria[2] === '*') return Number(memoria[1]) * Number(memoria[0])
    return Number(memoria[1]) / Number(memoria[0])
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
              onPress={() => handleButton(el)}
            >
              <Text style={estilos.textoBotao}>{el}</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  )
}