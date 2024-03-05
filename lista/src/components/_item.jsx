import { Image, StyleSheet, Text, View } from 'react-native'

function Item({ text = '', image = null }) {
  const style = StyleSheet.create({
    container: {
      flexDirection: 'row',
      padding: 12,
      alignItems: 'center',
      borderWidth: 1,
      borderRadius: 4,
      margin: 4,
    },
    text: {
      flex: 1,
    },
    image: {
      width: 40,
      height: 40
    }
  })
  return (
    <View style={style.container}>
      <Text style={style.text}>{text}</Text>
      <Image style={style.image} source={image} />
    </View>
  )
}

export { Item }
