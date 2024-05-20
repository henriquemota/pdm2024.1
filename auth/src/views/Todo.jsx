import { useNavigation } from '@react-navigation/native'
import * as Network from 'expo-network'
import * as SQLite from 'expo-sqlite'
import React, { useEffect, useState } from 'react'
import { ScrollView, View } from 'react-native'
import { Button, Card, DataTable, TextInput } from 'react-native-paper'

const Todo = () => {
  const [data, setData] = useState([])
  const { navigate } = useNavigation()

  const create = async () => {
    const db = await SQLite.openDatabaseAsync('database')

    await db.execAsync(`

    PRAGMA journal_mode = WAL;

    CREATE TABLE IF NOT EXISTS atividades (
      id INTEGER PRIMARY KEY NOT NULL, 
      descricao TEXT NOT NULL
    );

    -- DELETE FROM atividades;

    -- INSERT INTO atividades (descricao) VALUES ('test1');
    -- INSERT INTO atividades (descricao) VALUES ('test2');
    -- INSERT INTO atividades (descricao) VALUES ('test3');

    `).then(e => read())

  }

  const read = async () => {
    const db = await SQLite.openDatabaseAsync('database')
    const data = await db.getAllAsync("select * from atividades")
    setData(data)
    db.closeAsync()
  }

  useEffect(() => {
    create()
    Network.getNetworkStateAsync().then(({ type }) => type === 'WIFI' ? console.log('sincronizando') : console.log('aguarde wifi'))
  }, [])

  return (
    <View style={{ padding: 8 }}>
      <ScrollView>
        <Card>
          <Card.Content>
            <TextInput label='informe sua atividade' />
          </Card.Content>
          <Card.Actions>
            <Button>
              Inserir
            </Button>
            <Button onPress={read}>
              Ler
            </Button>
          </Card.Actions>
        </Card>
        <Card style={{ marginTop: 16 }}>
          <Card.Content>
            <DataTable>
              <DataTable.Header>
                <DataTable.Title>Tarefa</DataTable.Title>
              </DataTable.Header>
              {data.map((el, ix) =>
                <DataTable.Row key={ix}>
                  <DataTable.Cell>{el.descricao}</DataTable.Cell>
                </DataTable.Row>
              )}
            </DataTable>
          </Card.Content>
        </Card>
      </ScrollView>
    </View>
  )
}

export default Todo
