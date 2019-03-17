import {Repository} from '@s-ui/domain'

export default class MemesRepository extends Repository {
  all() {
    throw new Error('[MemesRepository#all] must be implemented')
  }
}
