import Domain from '../../src'

describe('GetListMemesUseCase', () => {
  it('Should get memes array', async () => {
    const domain = new Domain()
    const memes = await domain.get('getListMemesUseCase').execute()

    console.log(memes)
    return true
  })
})
