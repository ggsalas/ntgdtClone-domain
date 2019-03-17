import FirebaseMemesRepository from './FirebaseMemesRepository'

export default class MemesRepositoriesFactory {
  static firebaseMemesRepository() {
    return new FirebaseMemesRepository()
  }
}
