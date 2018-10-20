<template>
  <div class="gulu-pager">
    <span v-for="page in pages" class="gulu-pager-item"
      :class="{active: page === currentPage, separator: page === '...'}">
      {{page}}
    </span>
  </div>
</template>
<style scoped lang="scss">
  @import "var";
  .gulu-pager {
    &-item {
      border: 1px solid #e1e1e1; border-radius: $border-radius; padding: 0 4px; display: inline-flex; justify-content: center;
      align-items: center; font-size: 12px; min-width: 20px; height: 20px; margin: 0 4px; cursor: pointer;
      &.separator {
        border: none;
      }
      &.active, &:hover {
        border-color: $blue;
      }
      &.active {
        cursor: default;
      }
    }
  }
</style>

<script>
  export default {
    name: "GuluPager",
    props: {
      totalPage: {
        type: Number,
        required: true
      },
      currentPage: {
        type: Number,
        required: true
      },
      hideIfOnePage: {
        type: Boolean,
        default: true
      }
    },
    data () {
      let pages = unique([1, this.totalPage,
        this.currentPage,
        this.currentPage - 1, this.currentPage - 2,
        this.currentPage + 1, this.currentPage + 2]
        .sort((a, b) => a - b))
        .reduce((prev, current, index, array) => {
          prev.push(current)
          array[index + 1] !== undefined && array[index + 1] - array[index] > 1 && prev.push('...')
          return prev
        }, [])

      return {
        pages
      }
    }
  }

  function unique (array) {
    // return [...new Set(array)]
    // array = [1 1 2 3 4 5 20]
    const object = {}
    array.map((number) => {
      object[number] = true
    })
    return Object.keys(object).map((s) => parseInt(s, 10))

  }
</script>

<style scoped lang="scss">

</style>