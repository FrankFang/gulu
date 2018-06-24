import Vue from 'vue'
import Button from './button'
import ButtonGroup from './button-group'

import chai from 'chai'
import spies from 'chai-spies'

chai.use(spies)
const expect = chai.expect

try {

  {
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
      propsData: {
        icon: 'settings'
      }
    }).$mount()
    const useElement = vm.$el.querySelector('use')
    expect(useElement.getAttribute('xlink:href')).to.equal('#i-settings2')
    vm.$destroy()
  }
  {
  }
  {
  }
  {
  }
  {
  }
} catch (error) {
  window.errors = [error]
} finally {
  window.errors.forEach((error) => {
    console.error(error.message)
  })
}
