import { FlatList, Image, Text, View } from 'react-native'

function List2({ data = [], horizontal = false }) {

  return (
    <FlatList
      data={data}
      renderItem={({ item }) =>
        <View>
          {!horizontal && <Text>{item.nome}</Text>}
          <Image source={item.imagem} />
        </View>
      }
      keyExtractor={item => item.id}
    />
  )
}

export { List2 }
