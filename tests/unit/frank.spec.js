import {expect} from 'chai'
import frank from '../../src/frank'

describe('分支覆盖率演示', () => {
  it('存在', () => {
    expect(frank).to.exist
  })
  it(' 很小', () => {
    let result = frank(1)
    expect(result).to.eq('很小')
  })
  it('小', () => {
    let result = frank(6)
    expect(result).to.eq('小')
  })
  it('大', () => {
    let result = frank(11)
    expect(result).to.eq('大')
  })
})