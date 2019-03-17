import MemesRepository from './MemesRepository'

export default class FirebaseMemesRepository extends MemesRepository {
  async all() {
    return [
      {
        createdAt: Date.now(),
        id: 1,
        image: 'https://via.placeholder.com/300',
        link: 'google.com',
        site: 'vistoenredes',
        title: 'Example'
      }
    ]
  }
}
