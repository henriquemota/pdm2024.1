import { View } from 'react-native'
import { Header, List, Search } from './src/components'
import { data1, data2, img } from './src/data'



export default function App() {
  return (
    <View>
      <Header nome='Henrique Mota' imagem={img} />
      <Search />
      <List data={[...data2, ...data2]} horizontal />
      <List data={data1} />
    </View>
  )
}


