import {EntryPointFactory} from '@s-ui/domain'
import UseCasesMemesFactory from './memes/UseCases/factory'

export default EntryPointFactory({
  config: {},
  useCases: {getListMemesUseCase: UseCasesMemesFactory.getListMemesUseCase()}
})
