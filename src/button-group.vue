<template>
  <div class="g-button-group">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'gulu-button-group'
  }
</script>
<style lang="scss">
  .g-button-group {
    display: inline-flex; vertical-align: middle;
    > .g-button {
      border-radius: 0;
      border-left: none;
      &:first-child {
        border-left: 1px solid var(--border-color);
        border-top-left-radius: var(--border-radius); border-bottom-left-radius: var(--border-radius);}
      &:last-child {border-top-right-radius: var(--border-radius); border-bottom-right-radius: var(--border-radius);}
    }
  }
</style>