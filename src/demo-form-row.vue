<template>
  <div class="row">
    <label>{{label}}</label>
    <div class="controls">
      <slot></slot>
      <div>
        {{error && Object.values(error)[0]}}
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
  .row {padding: 8px 0; display: flex;}
  label {margin-right: 1em;}
</style>
<script>
  export default {
    name: 'demo-form-row',
    props: {
      label: {
        type: String,
        required: true
      },
      error: {
        type: Object,
      }
    }
  }
</script>