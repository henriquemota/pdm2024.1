import { FlatList, StyleSheet, Text, View } from 'react-native'

export default function App() {

  const data = []
  for (let i = 0; i < 100; i++) data.push({ id: i + 1, produto: 'Produto ' + (i + 1), preco: Math.random() * i + 10 })

  const estilos = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'rgba(0,0,0,0.3)',
      padding: 16,
    },
  })

  return (
    <View style={estilos.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => <Item item={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  )
}

function Item({ item }) {
  const estilos = StyleSheet.create({
    item: {
      padding: 8,
      flexDirection: 'row',
      justifyContent: 'space-between',
    }
  })

  return (
    <View style={estilos.item}>
      <Text>{item.produto}</Text>
      <Text>{item.preco.toLocaleString('pt-BR', { maximumFractionDigits: 2 })}</Text>
    </View>
  )
}