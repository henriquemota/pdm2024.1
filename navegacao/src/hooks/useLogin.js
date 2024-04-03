import { useNavigation } from '@react-navigation/native'
import { Alert } from 'react-native'


const useLogin = () => {
  const navigation = useNavigation()

  const sigin = ({ email, senha }) => {
    if (email === 'admin' && senha === 'senha') navigation.navigate('Home')
    else Alert.alert('Erro...', 'Usuário não localizado ou senha inválida.')
  }

  return {
    sigin,
  }
}

export default useLogin
export { useLogin }
