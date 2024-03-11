import cadeira from '../assets/cadeira.jpg'
import gabinete from '../assets/gabinete.jpg'
import mouse from '../assets/mouse.jpg'
import teclado from '../assets/teclado.jpg'


const img = {
  uri: 'https://logodownload.org/wp-content/uploads/2019/08/nubank-logo-0-1.png',
  height: 120,
  width: 120,
}

const data1 = []
for (let i = 0; i < 20; i++) {
  data1.push({ nome: 'produto1' + (i + 1), imagem: { uri: 'https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/89E2/production/_106589253_amino.jpg', height: 40, width: 80, } },)
  data1.push({ nome: 'produto2' + (i + 1), imagem: { uri: 'https://s1.static.brasilescola.uol.com.br/be/conteudo/images/88352f06b2fee7cdca32c3e12f5a68a4.jpg', height: 40, width: 80, } },)
  data1.push({ nome: 'produto3' + (i + 1), imagem: { uri: 'https://s1.static.brasilescola.uol.com.br/be/conteudo/images/os-alimentos-fornecem-nutrientes-necessarios-para-corpo-57065f8e5c260.jpg', height: 40, width: 80, } },)
}

const data2 = [
  {
    nome: 'Teclado Gamer',
    imagem: teclado,
    valor: 125.30
  },
  {
    nome: 'Cadeira Gamer',
    imagem: cadeira,
    valor: 1235.87
  },
  {
    nome: 'Gabienete Gamer',
    imagem: gabinete,
    valor: 325.40
  },
  {
    nome: 'Mouse Optico',
    imagem: mouse,
    valor: 75.25
  },
]

export { data1, data2, img }
