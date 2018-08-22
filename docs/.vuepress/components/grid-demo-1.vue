<template>
  <div style="padding-top: 16px;">
    <h2>双向绑定</h2>
    <p>
      <strong>预览</strong>
    </p>
    <g-row class="demoRow">
      <g-col span="8" class="demoCol"></g-col>
      <g-col span="8" class="demoCol"></g-col>
      <g-col span="8" class="demoCol"></g-col>
    </g-row>

    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<style scoped>
  * {
    box-sizing: border-box;
  }
  .demoRow{

  }
  .demoCol {
    height: 50px;
    border: 1px solid #ccc;
    background: #eee;
  }
</style>
<script>
  import GRow from '../../../src/row'
  import GCol from '../../../src/col'

  export default {
    components: {GRow, GCol},
    data () {
      return {
        value: '1',
        content: `
          data:{
            value: '1'
          }

          <g-input v-model="value"></g-input>
          <div>
            value: {{value}}
          </div>
      `.replace(/ {8}/g, '').trim()
      }
    }
  }
</script>