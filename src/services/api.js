const fakeId = () => Math.floor(new Date().getTime() * Math.random())
const posts = [
  {
    id: fakeId(),
    title: 'Velocidade 5x maior que a da luz',
    image: 'https://leninja.com.br/wp-content/uploads/2018/01/luz.jpg',
    created_at: '1 hour ago',
    category: 'imagens',
    description:
      'asdbhsauhdsauihdsa muito engraçado !! \n best comentário ever ',
    author: {
      name: 'Alberto Florence',
      avatar:
        'https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAMAAgDGAAwAAQAAAAAAAApGAAAAJDUzMmZhODNhLWExNjktNDk4OS1iZWY4LWNjNDUwMTMzNDQyNQ.jpg'
    }
  },
  {
    id: fakeId(),
    title: 'Velocidade 5x maior que a da luz',
    image: 'https://leninja.com.br/wp-content/uploads/2018/01/luz.jpg',
    created_at: '1 hour ago',
    category: 'imagens',
    description:
      'asdbhsauhdsauihdsa muito engraçado !! \n best comentário ever ',
    author: {
      name: 'Alberto Florence',
      avatar:
        'https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAMAAgDGAAwAAQAAAAAAAApGAAAAJDUzMmZhODNhLWExNjktNDk4OS1iZWY4LWNjNDUwMTMzNDQyNQ.jpg'
    }
  },
  {
    id: fakeId(),
    title: 'Velocidade 5x maior que a da luz',
    image: 'https://leninja.com.br/wp-content/uploads/2018/01/luz.jpg',
    created_at: '1 hour ago',
    category: 'imagens',
    description:
      'asdbhsauhdsauihdsa muito engraçado !! \n best comentário ever ',
    author: {
      name: 'Alberto Florence',
      avatar:
        'https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAMAAgDGAAwAAQAAAAAAAApGAAAAJDUzMmZhODNhLWExNjktNDk4OS1iZWY4LWNjNDUwMTMzNDQyNQ.jpg'
    }
  }
]

const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

const api = delay(Math.round(Math.random() * 800 + 700))

export const getPosts = () => api.then(() => posts)
