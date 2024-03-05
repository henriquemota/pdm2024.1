import { ScrollView, StyleSheet, View } from 'react-native'
import { Header, Item, Search } from '../components'
import { data, img } from '../data'

// #F5F5F5 cinza
// #BA4DE3 roxo claro
// #8A05BE roxo medio
// #530082 roxo escuro
// #191919 preto


export default function Principal() {
  const style = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F5F5F5',
    },
  })

  return (
    <View style={style.container}>
      <Header
        title='Bem vindo Henrique'
        image={img}
      />
      <Search />
      <ScrollView>
        {data.map(function ({ text, image }, ix) {
          return (<Item key={ix} text={text} image={image} />)
        })}
      </ScrollView>
    </View>
  )
}
