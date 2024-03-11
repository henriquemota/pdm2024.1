import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'

function List({ data = [], horizontal = false }) {
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#F5F5F5',
      padding: 4,
    },
    imagem: {
      height: 80,
      width: 80,
      overflow: 'hidden'
    }
  })

  return (
    <ScrollView horizontal={horizontal}>
      {data.map(function (el, ix) {
        return (
          <View key={ix} style={[styles.container, horizontal && { paddingVertical: 32, }]}>
            {!horizontal && <Text>{el.nome}</Text>}
            <Image style={styles.imagem} source={el.imagem} />
          </View>
        )
      })}
    </ScrollView>
  )
}

export { List }
