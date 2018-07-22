<template>
  <div class="tabs-pane" :class="classes" v-if="active">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'GuluTabsPane',
    inject: ['eventBus'],
    data () {
      return {
        active: false
      }
    },
    props: {
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
    }
  }
</script>
<style lang="scss" scoped>
  .tabs-pane {
    padding: 1em;
    &.active {
    }
  }
</style>