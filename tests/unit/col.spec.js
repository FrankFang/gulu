import chai, {expect} from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import {shallowMount, mount} from '@vue/test-utils'
import Col from '../../src/grid/col'
chai.use(sinonChai)

describe('Col.vue', () => {
  it('存在.', () => {
    expect(Col).to.exist
  })
})
