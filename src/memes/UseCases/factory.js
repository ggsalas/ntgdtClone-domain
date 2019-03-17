import GetListMemesUseCase from './GetListMemesUseCase'
import MemesRepositoriesFactory from '../Repositories/factory'

export default class UseCasesMemesFactory {
  static getListMemesUseCase() {
    return new GetListMemesUseCase({
      repository: MemesRepositoriesFactory.firebaseMemesRepository()
    })
  }
}
