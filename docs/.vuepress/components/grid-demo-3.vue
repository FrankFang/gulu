<template>
  <div style="padding-top: 16px;">
    <h2>设置空隙</h2>
    <p>
      <strong>预览</strong>
    </p>
    <g-row class="demoRow" gutter="10">
      <g-col span="8">
        <div class="demoCol">8</div>
      </g-col>
      <g-col span="8" offset="8">
        <div class="demoCol">8</div>
      </g-col>
    </g-row>
    <g-row class="demoRow" gutter="10">
      <g-col span="6" offset="6">
        <div class="demoCol">6</div>
      </g-col>
      <g-col span="6" offset="6">
        <div class="demoCol">6</div>
      </g-col>
    </g-row>
    <g-row class="demoRow" gutter="10">
      <g-col span="4">
        <div class="demoCol">4</div>
      </g-col>
      <g-col span="4" offset="4">
        <div class="demoCol">4</div>
      </g-col>
      <g-col span="4" offset="8">
        <div class="demoCol">4</div>
      </g-col>
    </g-row>
    <g-row class="demoRow" gutter="10">
      <g-col span="2">
        <div class="demoCol">2</div>
      </g-col>
      <g-col span="2" offset="2">
        <div class="demoCol">2</div>
      </g-col>
      <g-col span="2">
        <div class="demoCol">2</div>
      </g-col>
      <g-col span="2" offset="2">
        <div class="demoCol">2</div>
      </g-col>
      <g-col span="2">
        <div class="demoCol">2</div>
      </g-col>
      <g-col span="2" offset="2">
        <div class="demoCol">2</div>
      </g-col>
      <g-col span="2">
        <div class="demoCol">2</div>
      </g-col>
      <g-col span="2" offset="2">
        <div class="demoCol">2</div>
      </g-col>
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
    margin: 10px 0;
  }
  .demoCol {
    height: 50px;
    border: 1px solid #ccc;
    background: #eee;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
<script>
  import GRow from '../../../src/grid/row'
  import GCol from '../../../src/grid/col'

  export default {
    components: {GRow, GCol},
    data () {
      return {
        content: `
          * {
            box-sizing: border-box;
          }

          <g-row class="demoRow" gutter="10">
            <g-col span="8">
              <div class="demoCol">8</div>
            </g-col>
            <g-col span="8" offset="8">
              <div class="demoCol">8</div>
            </g-col>
          </g-row>
          <g-row class="demoRow" gutter="10">
            <g-col span="6" offset="6">
              <div class="demoCol">6</div>
            </g-col>
            <g-col span="6" offset="6">
              <div class="demoCol">6</div>
            </g-col>
          </g-row>
          <g-row class="demoRow" gutter="10">
            <g-col span="4">
              <div class="demoCol">4</div>
            </g-col>
            <g-col span="4" offset="4">
              <div class="demoCol">4</div>
            </g-col>
            <g-col span="4" offset="8">
              <div class="demoCol">4</div>
            </g-col>
          </g-row>
          <g-row class="demoRow" gutter="10">
            <g-col span="2">
              <div class="demoCol">2</div>
            </g-col>
            <g-col span="2" offset="2">
              <div class="demoCol">2</div>
            </g-col>
            <g-col span="2">
              <div class="demoCol">2</div>
            </g-col>
            <g-col span="2" offset="2">
              <div class="demoCol">2</div>
            </g-col>
            <g-col span="2">
              <div class="demoCol">2</div>
            </g-col>
            <g-col span="2" offset="2">
              <div class="demoCol">2</div>
            </g-col>
            <g-col span="2">
              <div class="demoCol">2</div>
            </g-col>
            <g-col span="2" offset="2">
              <div class="demoCol">2</div>
            </g-col>
          </g-row>
      `.replace(/^ {8}/gm, '').trim()
      }
    }
  }
</script>