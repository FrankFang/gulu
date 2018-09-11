<template>
  <div style="padding-top: 16px;">
    <h2>简单用法</h2>
    <p>
      <strong>预览</strong>
    </p>
    <g-slides :selected.sync="selected">
      <g-slides-item name="1">
        <div class="box">1</div>
      </g-slides-item>
      <g-slides-item name="2">
        <div class="box">2</div>
      </g-slides-item>
      <g-slides-item name="3">
        <div class="box">3</div>
      </g-slides-item>
    </g-slides>

    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<script>
  import GSlides from '../../../src/slides/slides'
  import GSlidesItem from '../../../src/slides/slides-item'

  export default {
    components: {
      GSlides, GSlidesItem
    },
    data () {
      return {
        selected: "1",
        content: `
          <g-slides :selected.sync="selected">
            <g-slides-item name="1">
              <div class="box">1</div>
            </g-slides-item>
            <g-slides-item name="2">
              <div class="box">2</div>
            </g-slides-item>
            <g-slides-item name="3">
              <div class="box">3</div>
            </g-slides-item>
          </g-slides>

          data: {
            selected: '1'
          }

          <style lang="scss" scoped>
            .box{
              height: 300px;
              background: blue;
              color: white;
              font-size: 30px;
              display: flex;
              justify-content: center;
              align-items: center;
            } 
          </style>

      `.replace(/^ {8}/gm, '').trim()
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import 'var';
  .box{
    height: 300px;
    background: $blue;
    color: white;
    font-size: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
  } 
</style>
