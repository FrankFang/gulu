const expect = chai.expect;
import Vue from 'vue'
import Input from '../src/input'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Input', () => {

  it('存在.', () => {
    expect(Input).to.exist
  })


  describe('props', () => {
    const Constructor = Vue.extend(Input)
    let vm
    afterEach(() => {
      vm.$destroy()
    })
    it('接收 value', () => {
      vm = new Constructor({
        propsData: {
          value: '1234'
        }
      }).$mount()
      const inputElement = vm.$el.querySelector('input')
      expect(inputElement.value).to.equal('1234')
    })

    it('接收 disabled', () => {
      vm = new Constructor({
        propsData: {
          disabled: true
        }
      }).$mount()
      const inputElement = vm.$el.querySelector('input')
      expect(inputElement.disabled).to.equal(true)
    })
    it('接收 readonly', () => {
      vm = new Constructor({
        propsData: {
          readonly: true
        }
      }).$mount()
      const inputElement = vm.$el.querySelector('input')
      expect(inputElement.readOnly).to.equal(true)
    })

    it('接收 error', () => {
      vm = new Constructor({
        propsData: {
          error: '你错了'
        }
      }).$mount()
      const useElement = vm.$el.querySelector('use')
      expect(useElement.getAttribute('xlink:href')).to.equal('#i-error')
      const errorMessage = vm.$el.querySelector('.errorMessage')
      expect(errorMessage.innerText).to.equal('你错了')
    })
  })
  describe('事件', () => {
    const Constructor = Vue.extend(Input)
    let vm
    afterEach(() => {
      vm.$destroy()
    })
    it('支持 change/input/focus/blur 事件', () => {
      ['change', 'input', 'focus', 'blur']
        .forEach((eventName) => {
          vm = new Constructor({}).$mount()
          const callback = sinon.fake();
          vm.$on(eventName, callback)
          //触发input的change 事件
          let event = new Event(eventName);
          Object.defineProperty(
            event, 'target', {
              value: {value: 'hi'}, enumerable: true
            }
          )
          let inputElement = vm.$el.querySelector('input')
          inputElement.dispatchEvent(event)
          expect(callback).to.have.been.calledWith('hi')
        })
    })
  })
})