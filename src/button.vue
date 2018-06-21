<template>
  <button class="g-button"><slot></slot></button>
</template>
<script>
  export default {
    name: 'gulu-button'
  }
</script>
<style lang="scss">
  .g-button {
    height: var(--button-height);
    padding: 0 1em;
    font: inherit;
    border-radius: var(--border-radius);
    border: 1px solid var(--border-color);
    background: var(--button-bg);
    &:hover {
      border-color: var(--border-color-hover);
    }
    &:active {
      background: var(--button-active-bg);
    }
    &:focus {
      outline: none;
    }
  }
</style>