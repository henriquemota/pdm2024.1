import { Feather } from '@expo/vector-icons'
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
// #F5F5F5 cinza
// #BA4DE3 roxo claro
// #8A05BE roxo medio
// #530082 roxo escuro
// #191919 preto

const img = {
  uri: 'https://logodownload.org/wp-content/uploads/2019/08/nubank-logo-0-1.png',
  width: 80,
  height: 80
}

const data = []
for (let i = 0; i < 100; i++) {
  data.push({ text: 'Produto 1', image: img })
}

export default function App() {
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

function Search() {
  const style = StyleSheet.create({
    container: {
      flexDirection: 'row',
      backgroundColor: '#8A05BE',
      padding: 12,
    },
    input: {
      flex: 1,
      borderWidth: 1,
      borderRadius: 8,
      borderRightWidth: 0,
      borderColor: '#530082',
      backgroundColor: '#F5F5F5',
      paddingHorizontal: 12,
    },
    button: {
      padding: 8,
      justifyContent: 'center',
      backgroundColor: '#c3c3c3',
      borderRadius: 8,
      marginLeft: 4,
    }
  })
  return (
    <View style={style.container}>
      <TextInput
        placeholder='refine sua busca'
        style={style.input}
      />
      <TouchableOpacity style={style.button}>
        <Feather name='search' size={24} color='#530082' />
      </TouchableOpacity>
    </View>
  )
}

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