<template>
  <div class="g-sub-nav" :class="{active}" v-click-outside="close">
    <span @click="onClick">
      <slot name="title"></slot>
    </span>
    <div class="g-sub-nav-popover" v-show="open">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import ClickOutside from '../click-outside'
  export default {
    directives: {ClickOutside},
    name: "GuluSubNav",
    inject: ['root'],
    props: {
      name: {
        type: String,
        required: true
      }
    },
    data () {
      return {
        open: false,
      }
    },
    computed: {
      active () {
        return this.root.namePath.indexOf(this.name) >= 0 ? true : false
      }
    },
    methods: {
      onClick () {
        this.open = !this.open
      },
      close () {
        this.open = false
      },
      updateNamePath () {
        this.root.namePath.unshift(this.name)
        if (this.$parent.updateNamePath) {
          this.$parent.updateNamePath()
        } else {
          // this.root.namePath = []
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "var";
  .g-sub-nav {
    position: relative;
    &.active {
      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        border-bottom: 2px solid $blue;
        width: 100%;
      }
    }
    > span {
      padding: 10px 20px;
      display: block;
    }
    &-popover {
      background: white;
      position: absolute;
      top: 100%;
      left: 0;
      margin-top: 4px;
      white-space: nowrap;
      box-shadow: 0 0 3px fade_out(black, 0.8);
      border-radius: $border-radius;
      font-size: $font-size;
      color: $light-color;
      min-width: 8em;
    }
  }
  .g-sub-nav .g-sub-nav .g-sub-nav-popover {
    top: 0;
    left: 100%;
    margin-left: 8px;
  }
</style>