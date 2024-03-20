import { Feather } from '@expo/vector-icons'
import { useState } from 'react'
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

const App = () => {
  const [task, setTask] = useState('')
  const [data, setData] = useState([])

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#30D9C8',
      padding: 8,
      paddingVertical: 24,
    },
    title: {
      color: '#2128A6',
      fontSize: 24,
      fontWeight: 'bold'
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 4,
      marginVertical: 8
    },
    input: {
      padding: 8,
      borderWidth: 2,
      borderColor: '#DCE0F2',
      backgroundColor: 'rgba(33,40,166,0.2)',
      flex: 1,
      fontSize: 16,
    },
    itemRow: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'center',
      gap: 2,
      marginVertical: 8,
      paddingBottom: 4,
      borderBottomWidth: 2,
      borderBottomColor: '#DCE0F2',
      borderStyle: 'dotted'
    },
    itemLabel: {
      flex: 1,
      fontSize: 16,
    },
    itemLabelFinished: {
      textDecorationLine: 'line-through',
      color: '#ff0000',
    },
  })

  const handleSave = () => {
    const localdata = [...data]
    const obj = { id: Math.ceil(Math.random() * 100000), task: task, finished: false }
    localdata.push(obj)
    setData(localdata)
    setTask('')
  }
  const handleDelete = (id) => {
    const localdata = data.filter(m => Number(m.id) !== Number(id))
    setData(localdata)
  }
  const handleCheck = (id) => {
    const localdata = [...data]
    const index = localdata.findIndex(m => Number(m.id) === Number(id))
    localdata[index].finished = true
    setData(localdata)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo APP</Text>
      <View style={styles.row}>
        <TextInput
          style={styles.input}
          value={task}
          onChangeText={setTask}
        />
        <Button
          icon='save'
          onPress={handleSave}
        />
      </View>
      <ScrollView>
        {data.map((el, ix) =>
          <View key={ix} style={styles.itemRow}>
            <Text
              style={[styles.itemLabel, el.finished ? styles.itemLabelFinished : null]}
            >{el?.task}</Text>
            <Button
              icon='delete'
              onPress={() => handleDelete(el.id)}
            />
            {!el.finished &&
              <Button
                icon='check-square'
                onPress={() => handleCheck(el.id)}
              />
            }
          </View>
        )}
      </ScrollView>
    </View>
  )
}

const Button = ({ icon = '', size = 24, onPress = null }) => {
  const styles = StyleSheet.create({
    button: {
      borderWidth: 2,
      borderColor: '#6F73BF',
      padding: 8,
      borderRadius: 4,
      backgroundColor: '#DCE0F2',
    },
    buttonText: {
      color: '#6F73BF',
    },
  })

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
    >
      <Feather name={icon} size={size} style={styles.buttonText} />
    </TouchableOpacity>
  )
}

export default App