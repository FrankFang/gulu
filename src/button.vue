<template>
  <button class="g-button" @click="$emit('click')" :class="{[`icon-${iconPosition}`]:true}">
    <g-icon v-if="loading" name="loading" class="spin"></g-icon>
    <g-icon v-if="icon && !loading" :name="icon"/>
    <slot/>
  </button>
</template>
<script>
  import Icon from './icon'
  export default {
    name: 'gulu-button',
    components: {'g-icon': Icon},
    props: ['icon', 'loading', 'iconPosition']
  }
</script>
<style lang="scss">
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  .g-button {
    height: var(--button-height); padding: 0 1em; font: inherit; border-radius: var(--border-radius);
    border: 1px solid var(--border-color); background: var(--button-bg);
    display: inline-flex; justify-content: center; align-items: center;
    &:hover { border-color: var(--border-color-hover); }
    &:active { background: var(--button-active-bg); }
    &:focus { outline: none; }
    > .g-icon { margin-right: .3em;}
    .spin { animation: spin 1s infinite linear; }
    &.icon-left {
      > .g-icon {order: 2;}
    }
  }
</style>