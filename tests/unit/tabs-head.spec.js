import chai, {expect} from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import {shallowMount, mount} from '@vue/test-utils'
import TabsHead from '../../src/tabs/tabs-head'
chai.use(sinonChai)

describe('TabsHead.vue', () => {
  it('存在.', () => {
    expect(TabsHead).to.exist
  })
})
