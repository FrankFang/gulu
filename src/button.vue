<template>
  <button class="g-button">
    <g-icon name="loading" class="spin"></g-icon>
    <g-icon v-if="icon" :name="icon"/>
    <slot/>
  </button>
</template>
<script>
  import Icon from './icon'
  export default {
    name: 'gulu-button',
    components: {'g-icon': Icon},
    props: ['icon']
  }
</script>
<style lang="scss">
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
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
    .spin {
      animation: spin 1s infinite linear;
    }
  }
</style>