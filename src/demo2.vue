<script lang="jsx">
  export default {
    data () {
      return {
        n: 13,
        items: [2, 3, 4, 5, 6, 7]
      }
    },
    name: 'demo2',
    render (h) {
      return (
        <div class="xxx">
          {this.n > 10 ? <span>大</span> : <span>小</span>}
          <ul>
            {this.items.map(i =>
              <li>{i}</li>
            )}
          </ul>
        </div>
      )
    }
  }
</script>
<style scoped lang="scss">
  .xxx {
    color: red;
  }
</style>