
const img = {
  uri: 'https://logodownload.org/wp-content/uploads/2019/08/nubank-logo-0-1.png',
  width: 80,
  height: 80
}

const data = []

for (let i = 0; i < 100; i++) {
  data.push({ text: 'Produto 1', image: img })
}

export { data, img }
