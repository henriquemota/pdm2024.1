import axios from 'axios'

const useCEP = () => {

  const getCEP = async (cep = '60000000') => {
    try {
      const { data } = await axios.get(`https://cep.awesomeapi.com.br/json/${cep}`)
      return data
    } catch (error) {
      return undefined
    }
  }

  return {
    getCEP,
  }
}

export default useCEP
export { useCEP }
