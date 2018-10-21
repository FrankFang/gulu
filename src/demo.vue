<template>
  <div>
    {{selected}}
    <div style="margin: 20px;">
      <g-table :columns="columns" :data-source="dataSource" bordered :selected-items.sync="selected"></g-table>
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
          {text: '姓名', field: 'name'},
          {text: '分数', field: 'score'},
        ],
        dataSource: [
          {id: 1, name: '方方', score: 100},
          {id: 2, name: '圆圆', score: 99},
          {id: 3, name: '张三', score: 100},
          {id: 4, name: '李四', score: 99},
          {id: 5, name: '超人', score: 100},
          {id: 6, name: '蝙蝠侠', score: 99},
          {id: 7, name: '蜘蛛侠', score: 100},
          {id: 8, name: '钢铁侠', score: 99},
        ]
      }
    },
    methods: {}
  };
</script>
<style>
  * {margin: 0; padding: 0; box-sizing: border-box;}
  body {background: white;}
</style>
<style scoped lang="scss">
</style>
