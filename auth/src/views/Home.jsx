import { addDoc, collection, getDocs } from 'firebase/firestore'
import React, { useState } from 'react'
import { ScrollView, View } from 'react-native'
import { ActivityIndicator, Button, Card, DataTable, TextInput } from 'react-native-paper'
import { db } from '../services/firebase'

const Home = () => {
  const [list, setlist] = useState([])
  const [loading, setloading] = useState(false)
  const [todo, settodo] = useState('')
  const minha_colecao = collection(db, "tasks")

  const addTodo = () => {
    setloading(true)
    addDoc(minha_colecao, { tarefa: todo })
      .then(() => settodo(''))
      .finally(() => setloading(false))
  }

  const readTodos = () => {
    const data = []
    setloading(true)
    getDocs(minha_colecao)
      .then(e => e.forEach(doc => data.push({ id: doc.id, ...doc.data() })))
      .finally(() => {
        setloading(false)
        setlist(data)
      })
  }

  return (
    <View style={{ padding: 8 }}>
      <ScrollView>
        <ActivityIndicator animating={loading} />
        <Card>
          <Card.Content>
            <TextInput label='informe sua atividade' value={todo} onChangeText={settodo} />
          </Card.Content>
          <Card.Actions>
            <Button onPress={addTodo}>
              Inserir
            </Button>
            <Button onPress={readTodos}>
              Ler dados
            </Button>
          </Card.Actions>
        </Card>
        <Card style={{ marginTop: 16 }}>
          <Card.Content>
            <DataTable>
              <DataTable.Header>
                <DataTable.Title>Tarefa</DataTable.Title>
              </DataTable.Header>
              {list.map((el, ix) =>
                <DataTable.Row key={ix}>
                  <DataTable.Cell>{el.tarefa}</DataTable.Cell>
                </DataTable.Row>
              )}
            </DataTable>
          </Card.Content>
        </Card>
      </ScrollView>
    </View>
  )
}

export default Home
