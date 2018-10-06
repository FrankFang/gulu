<template>
  <div class="form-wrapper">
    <form class="form" @submit.prevent="onSubmit">
      <h1>登录</h1>
      <demo-form-row label="邮箱" :error="errors.email">
        <g-input type="text" v-model="user.email"></g-input>
      </demo-form-row>
      <demo-form-row label="密码" :error="errors.password">
        <g-input type="password" v-model="user.password"></g-input>
      </demo-form-row>
      <div>
        <g-button class="ok" type="submit">提交</g-button>
      </div>
    </form>


  </div>
</template>
<style>
  body {background: #888;}
</style>
<style scoped lang="scss">
  .form {
    background: white;
    padding: 24px;
    border-radius: 8px;
    margin-top: 36px;
    min-height: 60vh;
    &-wrapper {
      display: flex;justify-content: center;
    }
    .controls {
    }
    .ok {
      display: block;
      width: 100%;
      margin-top: 24px;
    }
  }
</style>
<script>
  import GButton from './button/button'
  import GInput from './input'
  import DemoFormRow from './demo-form-row'
  import formMixin from './form-mixin'

  export default {
    name: "demo",
    components: {GButton, GInput, DemoFormRow},
    mixins: [formMixin],
    data () {
      return {
        user: {
          email: '',
          password: ''
        },
        rules: [
          {key: 'email', pattern: 'email', required: true},
          {key: 'password', minLength: 6, required: true}
        ]
      };
    },
    methods: {
      onSubmit () {
        this.validate(this.user)
        console.log(this.errors)
      }
    },
  };
</script>
<style>
  * {margin: 0; padding: 0; box-sizing: border-box;}
</style>