import chai, {expect} from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import {shallowMount, mount} from '@vue/test-utils'
import Toast from '../../src/toast'

chai.use(sinonChai)

describe('Toast.vue', () => {
  it('存在.', () => {
    expect(Toast).to.exist
  })
})
