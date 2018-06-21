<template>
  <button class="g-button"><slot></slot></button>
</template>
<script>
  export default {
    name: 'gulu-button'
  }
</script>
<style>
  .g-button {
    height: var(--button-height);
    padding: 0 1em;
    font: inherit;
    border-radius: var(--border-radius);
    border: 1px solid var(--border-color);
    background: var(--button-bg);
  }
  .g-button:hover {
    border-color: var(--border-color-hover);
  }
  .g-button:active {
    background: var(--button-active-bg);
  }
  .g-button:focus {
    outline: none;
  }
</style>