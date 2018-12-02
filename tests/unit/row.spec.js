import chai, {expect} from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import {shallowMount, mount} from '@vue/test-utils'
import Row from '../../src/grid/row'
chai.use(sinonChai)

describe('Row.vue', () => {
  it('存在.', () => {
    expect(Row).to.exist
  })
})
