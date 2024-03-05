import { Feather } from '@expo/vector-icons'
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native'

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

export { Search }

