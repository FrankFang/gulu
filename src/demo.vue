<template>
  <div style="margin: 20px;">
    <g-pager :total-page="20" :current-page="3"></g-pager>
  </div>
</template>
<script>
  import GPager from './pager'

  export default {
    name: "demo",
    components: {GPager},
  };
</script>
<style>
  * {margin: 0; padding: 0; box-sizing: border-box;}
  body {background: white;}
</style>
<style scoped lang="scss">
</style>
