import { StyleSheet, View } from 'react-native'

export default function App() {

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#333333',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 16,
      flexWrap: 'wrap',
    },
    dimensao: {
      height: 80,
      width: 80,
      borderRadius: 40,
    },
    containerAzul: {
      backgroundColor: '#0000ff'
    },
    containerVerde: {
      backgroundColor: '#00ff00'
    },
    containerVermelho: {
      backgroundColor: '#ff0000'
    },
  })

  return (
    <View style={styles.container}>
      <View style={[styles.containerAzul, styles.dimensao]}></View>
      <View style={[styles.containerVerde, styles.dimensao]}></View>
      <View style={[styles.containerVermelho, styles.dimensao]}></View>
    </View>
  )
}