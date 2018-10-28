<template>
  <div>
    {{selected}}
    <div style="margin: 20px;">
      <g-table :columns="columns" :data-source="dataSource" bordered :selected-items.sync="selected" :order-by.sync="orderBy"
        @update:orderBy="x" :loading="loading" :height="400" expend-field="description" checkable>
        <template slot-scope="xxx">
          <button @click="edit(xxx.item)">编辑</button>
          <button @click="view(xxx.item)">查看</button>
          <button>删除</button>
        </template>
      </g-table>
    </div>
    <div style="margin: 20px;">
      <g-table :columns="columns" :data-source="dataSource" bordered compact :striped="false"></g-table>
    </div>
    <div style="margin: 20px;">
      <g-pager :total-page="10" :current-page.sync="currentPage"></g-pager>
    </div>
  </div>
</template>
<script>
  import GPager from './pager'
  import GTable from './table'

  export default {
    name: "demo",
    components: {GPager, GTable},
    data () {
      return {
        currentPage: 1,
        selected: [],
        columns: [
          {text: '姓名', field: 'name', width: 100}, // 1
          {text: '分数', field: 'score'},
        ],
        orderBy: { // true - 开启排序，但是不确定asc desc
          score: 'desc'
        },
        loading: false,
        dataSource: [
          {id: 1, name: '方方', score: 100, description: 'xxxx xxxx'},
          {id: 2, name: '圆圆', score: 99, description: 'yyyy yyyy'},
          {id: 3, name: '张三', score: 100},
          {id: 4, name: '李四', score: 99},
          {id: 5, name: '超人', score: 100},
          {id: 6, name: '蝙蝠侠', score: 99},
          {id: 7, name: '蜘蛛侠', score: 100},
          {id: 8, name: '钢铁侠', score: 99},
          {id: 9, name: '方方', score: 100},
          {id: 10, name: '圆圆', score: 99},
          {id: 11, name: '张三', score: 100},
          {id: 12, name: '李四', score: 99},
          {id: 13, name: '超人', score: 100},
          {id: 14, name: '蝙蝠侠', score: 99},
          {id: 15, name: '蜘蛛侠', score: 100},
          {id: 16, name: '钢铁侠', score: 99},
          {id: 17, name: '蜘蛛侠', score: 100},
          {id: 18, name: '钢铁侠', score: 99},
          {id: 19, name: '方方', score: 100},
          {id: 20, name: '圆圆', score: 99},
        ]
      }
    },
    methods: {
      edit (item) {
        alert(`开始编辑${item.id}`)
      },
      view (item) {
        alert(`开始查看${item.id}`)
      },
      x () {
        this.loading = true
        setTimeout(() => {
          this.dataSource = this.dataSource.sort((a, b) => a.score - b.score)
          this.loading = false
        }, 3000)
      }
    }
  };
</script>
<style>
  * {margin: 0; padding: 0; box-sizing: border-box;}
  body {background: white;}
</style>
<style scoped lang="scss">
</style>
