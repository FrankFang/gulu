<template>
  <div class="gulu-uploader">
    <div @click="onClickUpload">
      <slot></slot>
    </div>
    <ol class="gulu-uploader-fileList">
      <li v-for="file in fileList" :key="file.name">

        <template v-if="file.status === 'uploading'">
          <g-icon name="loading" class="gulu-uploader-spin"></g-icon>
        </template>
        <template v-else-if="file.type.indexOf('image') === 0">
          <img class="gulu-uploader-image" :src="file.url" width="32" height="32" alt="">
        </template>
        <temaplte v-else>
          <div class="gulu-uploader-defaultImage"></div>
        </temaplte>


        <span class="gulu-uploader-name" :class="{[file.status]: file.status}">{{file.name}}</span>
        <button class="gulu-uploader-remove" @click="onRemoveFile(file)">x</button>
      </li>
    </ol>
    <div ref="temp" style="width: 0; height: 0; overflow: hidden;"></div>
  </div>
</template>

<script>
  import GIcon from './icon'

  export default {
    name: "GuluUploader",
    components: {GIcon},
    props: {
      name: {
        type: String,
        required: true
      },
      action: {
        type: String,
        required: true
      },
      method: {
        type: String,
        default: 'POST'
      },
      parseResponse: {
        type: Function,
        required: true
      },
      fileList: {
        type: Array,
        default: () => []
      }
    },
    data () {
      return {
        url: 'about:blank'
      }
    },
    methods: {
      onClickUpload () {
        let input = this.createInput()
        input.addEventListener('change', () => {
          this.updateFile(input.files[0])
          input.remove()
        })
        input.click()
      },
      onRemoveFile (file) {
        let answer = window.confirm('你确定要删除这玩意吗')
        if (answer) {
          let copy = [...this.fileList]
          let index = copy.indexOf(file)
          copy.splice(index, 1)
          this.$emit('update:fileList', copy)
        }
      },
      beforeUploadFile (rawFile, newName, url) {
        let {size, type} = rawFile
        console.log('插入占位符')
        this.$emit('update:fileList', [...this.fileList, {name: newName, type, size, status: 'uploading'}])
      },
      afterUploadFile (newName, url) {
        let file = this.fileList.filter(f => f.name === newName)[0]
        let index = this.fileList.indexOf(file)
        let fileCopy = JSON.parse(JSON.stringify(file))
        fileCopy.url = url
        fileCopy.status = 'success'
        let fileListCopy = [...this.fileList]
        fileListCopy.splice(index, 1, fileCopy)
        this.$emit('update:fileList', fileListCopy)
      },
      updateFile (rawFile) {
        let {name, size, type} = rawFile
        let newName = this.generateName(name)
        this.beforeUploadFile(rawFile, newName) // emit
        let formData = new FormData()
        formData.append(this.name, rawFile)
        this.doUploadFile(formData, (response) => {
          let url = this.parseResponse(response)
          this.url = url
          this.afterUploadFile(newName, url)
        }, () => {
          this.uploadError(newName)
        })
      },
      uploadError (newName) {
        let file = this.fileList.filter(f => f.name === newName)[0]
        let index = this.fileList.indexOf(file)
        let fileCopy = JSON.parse(JSON.stringify(file))
        fileCopy.status = 'fail'
        // fileCopy.failMessage = '尺寸过大'
        let fileListCopy = [...this.fileList]
        fileListCopy.splice(index, 1, fileCopy)
        this.$emit('update:fileList', fileListCopy)
      },
      generateName (name) {
        while (this.fileList.filter(f => f.name === name).length > 0) {
          let dotIndex = name.lastIndexOf('.')
          let nameWithoutExtension = name.substring(0, dotIndex)
          let extension = name.substring(dotIndex)
          name = nameWithoutExtension + '(1)' + extension
        }
        return name
      },
      doUploadFile (formData, success, fail) {
        let xhr = new XMLHttpRequest()
        xhr.open(this.method, this.action)
        xhr.onload = () => {
          if (Math.random() > 0.5) {
            success(xhr.response)
          } else {
            fail()
          }
        }
        xhr.send(formData)
      },
      createInput () {
        let input = document.createElement('input')
        input.type = 'file'
        this.$refs.temp.appendChild(input)
        return input
      }

    }
  }
</script>

<style scoped lang="scss">
  @import "var";
  .gulu-uploader {
    &-fileList {
      list-style: none;
      > li {
        display: flex;
        align-items: center;
        margin: 8px 0;
        border: 1px solid darken($grey, 10%);
      }
    }
    &-defaultImage {
      width: 32px;
      height: 32px;
      margin-right: 8px;
    }
    &-image {
      margin-right: 8px;
      border: none;
    }
    &-name {
      margin-right: auto;
      &.success {
        color: green;
      }
      &.fail {
        color: red;
      }
    }
    &-remove {
      width: 32px;
      height: 32px;
    }
    &-spin {
      width: 32px;
      height: 32px;
      @include spin;
    }
  }
</style>