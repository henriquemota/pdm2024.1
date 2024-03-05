import { Image, StyleSheet, Text, View } from 'react-native'

function Header({ title = '', image = null }) {
  const style = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: '#530082',
      padding: 8,
      paddingHorizontal: 32
    },
    text: {
      color: '#ffffff',
      fontSize: 16,
      fontWeight: 'bold',
    }
  })
  return (
    <View style={style.container}>
      <Text style={style.text}>{title}</Text>
      <Image source={image} />
    </View>
  )
}

export { Header }

