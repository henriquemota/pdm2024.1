import { Image, StyleSheet, Text, View } from 'react-native'
import logo from '../assets/logo.png'

function Header({ nome = 'Nome nao informado', imagem = null }) {
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 16,
      paddingTop: 32,
      backgroundColor: '#c3c3c3',
    },
    text: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#231f20'
    },
    image: {
      height: 80,
      width: 80,
    },
  })

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{nome}</Text>
      <Image style={styles.image} source={logo} />
    </View>
  )
}

export { Header }
