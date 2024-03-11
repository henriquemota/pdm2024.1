import { StyleSheet, View } from 'react-native'

export default function App() {


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ccc',
      justifyContent: 'center',
      alignItems: 'center',
    },
    botao: {
      height: 80,
      width: 80,
      margin: 4
    },
    botaoAzul: {
      backgroundColor: '#0000ff',
    },
    botaoVerde: {
      backgroundColor: '#00ff00'
    },
    botaoVermelho: {
      backgroundColor: '#ff0000'
    },
  })

  return (
    <View style={styles.container}>
      <View style={[styles.botao, styles.botaoAzul]}></View>
      <View style={[styles.botao, styles.botaoVerde]}></View>
      <View style={[styles.botao, styles.botaoVermelho]}></View>
    </View >
  )
}