<template>
  <div>
    <g-nav :selected.sync="selected">
      <g-nav-item name="home">首页</g-nav-item>
      <g-nav-item name="about">关于</g-nav-item>
      <g-nav-item name="hire">招聘</g-nav-item>
    </g-nav>
  </div>
</template>
<script>
  import GNav from './nav/nav.vue'
  import GNavItem from './nav/nav-item.vue'
  import GSubNav from './nav/sub-nav.vue'

  export default {
    name: "demo",
    components: {GNav, GNavItem, GSubNav},
    data () {
      return {
        selected: ['home']
      };
    },
  };
</script>
<style>
  * {margin: 0; padding: 0; box-sizing: border-box;}
</style>