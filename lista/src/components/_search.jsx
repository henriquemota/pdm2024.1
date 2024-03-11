import { Feather } from '@expo/vector-icons'
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native'

function Search() {
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#565358',
      padding: 16,
    },
    input: {
      flex: 1,
      backgroundColor: '#F5F5F5',
      padding: 8,
      borderColor: '#565358',
      borderWidth: 2,
      borderRadius: 8
    },
    button: {
      padding: 8,
    },
  })

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} />
      <TouchableOpacity style={styles.button}>
        <Feather name="search" size={24} color="#fff" />
      </TouchableOpacity>
    </View >
  )
}

export { Search }
