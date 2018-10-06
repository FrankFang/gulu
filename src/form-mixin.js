import Validate from './validate'
export default {
  data () {
    return {
      errors: {},
      validator: new Validate()
    }
  },
  methods: {
    validate (formData) {
      const rules = this.rules
      const v = this.validator
      this.errors = v.validate(formData, rules)
    }
  }
}