<template>
  <div class="tabs-item" @click="xxx" :class="classes">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'GuluTabsItem',
    inject: ['eventBus'],
    data () {
      return {
        active: false
      }
    },
    props: {
      disabled: {
        type: Boolean,
        default: false
      },
      name: {
        type: String | Number,
        required: true
      }
    },
    computed: {
      classes () {
        return {
          active: this.active
        }
      }
    },
    created () {
      this.eventBus.$on('update:selected', (name) => {
        this.active = name === this.name;
      })
    },
    methods: {
      xxx () {
        this.eventBus.$emit('update:selected', this.name)
      }
    }
  }
</script>
<style lang="scss" scoped>
  .tabs-item {
    flex-shrink: 0;
    padding: 0 1em;
    &.active {
      background: red;
    }
  }
</style>