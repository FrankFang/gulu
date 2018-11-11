<template>
  <div style="margin: 20px;">
    <div>只能上传 300kb 以内的 png、jpeg 文件</div>
    <g-uploader accept="image/*" method="POST" action="http://127.0.0.1:3000/upload" name="file"
      :parseResponse="parseResponse" :file-list.sync="fileList" v-on:update:fileList="yyy">
      <g-button icon="upload">上传</g-button>
    </g-uploader>
  </div>
</template>

<script>
  import GUploader from './uploader'
  import GButton from './button/button'

  export default {
    name: "demo",
    components: {GUploader, GButton},
    data () {
      return {
        fileList: []
      }
    },
    methods: {
      parseResponse (response) {
        let object = JSON.parse(response)
        let url = `http://127.0.0.1:3000/preview/${object.id}`
        return url
      },
      yyy (fileList) {
        console.log('监听到了 update:fileList 事件')
        console.log('fileList')
        console.log(fileList)
        console.log('this.fileList')
        console.log(this.fileList)
        console.log('this.fileList.length')
        console.log(this.fileList.length)
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
