import { Feather } from '@expo/vector-icons'
import { useState } from 'react'
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

export default function App() {
  const [texto, setTexto] = useState('')
  const [data, setData] = useState([])

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 8,
      paddingVertical: 32,
      backgroundColor: '#012E40',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#fff'
    },
    containerInput: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
    },
    input: {
      flex: 1,
      height: 64,
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
      padding: 16,
      borderWidth: 1,
      borderRadius: 4,
      borderColor: '#fff',
      marginVertical: 8,
      fontSize: 24,
    },
    button: {
      padding: 8,
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 1,
      borderRadius: 8,
      borderColor: '#fff',
      height: 64,
      width: 64,
    },
    buttonText: {
      color: '#fff',
    },
    containerItems: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
    },
    containerItemsButtons: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 2,
    },
    itemButton: {
      padding: 4,
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 1,
      borderRadius: 2,
      borderColor: '#fff',
      height: 32,
      width: 32,
    },
    itemText: {
      color: '#fff',
      fontSize: 18,
    },
    itemTextFinished: {
      textDecorationLine: 'line-through',
      color: '#888'
    },

  })

  function handleSave() {
    const localdata = [...data]
    localdata.push({
      id: localdata.length + 1,
      task: texto,
      finished: false,
    })
    setData(localdata)
    setTexto('')
  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Todo APP</Text>
        <View style={styles.containerInput}>
          <TextInput
            style={styles.input}
            placeholder='informe a atividade'
            onChangeText={setTexto}
            value={texto}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={handleSave}
          >
            <Feather name='save' size={24} style={styles.buttonText} />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView style={{ marginTop: 16 }}>
        {data.map((el, ix) =>
          <View key={ix} style={styles.containerItems}>
            <Text style={[styles.itemText, el.finished ? styles.itemTextFinished : null]}>{el.id}</Text>
            <Text style={[styles.itemText, el.finished ? styles.itemTextFinished : null, { flex: 1 }]}>{el.task}</Text>
            <View style={styles.containerItemsButtons}>
              <TouchableOpacity style={styles.itemButton}>
                <Feather name='delete' style={styles.itemText} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.itemButton}>
                <Feather name='check' style={styles.itemText} />
              </TouchableOpacity>
            </View>
          </View>
        )}
      </ScrollView>
    </View>
  )
}