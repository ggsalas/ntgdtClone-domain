import {UseCase} from '@s-ui/domain'

export default class GetListMemesUseCase extends UseCase {
  constructor({repository}) {
    super()
    this._repository = repository
  }

  execute() {
    return this._repository.all()
  }
}
