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
  import http from './http'

  export default {
    name: "GuluUploader",
    components: {GIcon},
    props: {
      name: {type: String, required: true},
      action: {type: String, required: true},
      method: {type: String, default: 'POST'},
      parseResponse: {type: Function, required: true},
      fileList: {type: Array, default: () => []},
      sizeLimit: {type: Number}
    },
    data () {
      return {
        url: 'about:blank'
      }
    },
    methods: {
      onClickUpload () {
        let input = this.createInput()
        input.addEventListener('change', (e) => {
          this.uploadFiles(input.files) // 单文件
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
      beforeUploadFiles (rawFiles, newNames) {
        rawFiles = Array.from(rawFiles)
        for (let i = 0; i < rawFiles.length; i++) {
          let {size, type} = rawFiles[i]
          if (size > this.sizeLimit) {
            this.$emit('error', '文件大于2MB')
            return false
          }
        }
        let x = rawFiles.map((rawFile, i) => {
          let {type, size} = rawFile
          return {name: newNames[i], type, size, status: 'uploading'}
        })
        this.$emit('update:fileList', [...this.fileList, ...x])
        return true
      },
      afterUploadFiles (newName, url) {
        let file = this.fileList.filter(f => f.name === newName)[0]
        let index = this.fileList.indexOf(file)
        let fileCopy = JSON.parse(JSON.stringify(file))
        fileCopy.url = url
        fileCopy.status = 'success'
        let fileListCopy = [...this.fileList]
        fileListCopy.splice(index, 1, fileCopy)
        this.$emit('update:fileList', fileListCopy)
        this.$emit('uploaded')
      },
      uploadFiles (rawFiles) {
        let newNames = []
        for (let i = 0; i < rawFiles.length; i++) {
          let rawFile = rawFiles[i]
          let {name, size, type} = rawFile
          let newName = this.generateName(name)
          newNames[i] = newName
        }
        if (!this.beforeUploadFiles(rawFiles, newNames)) {return}
        for (let i = 0; i < rawFiles.length; i++) {
          let rawFile = rawFiles[i]
          let newName = newNames[i]
          let formData = new FormData()
          formData.append(this.name, rawFile)
          this.doUploadFiles(formData, (response) => {
            let url = this.parseResponse(response)
            this.url = url
            this.afterUploadFiles(newName, url)
          }, (xhr) => {
            this.uploadError(xhr, newName)
          })
        }
      },
      uploadError (xhr, newName) {
        let file = this.fileList.filter(f => f.name === newName)[0]
        let index = this.fileList.indexOf(file)
        let fileCopy = JSON.parse(JSON.stringify(file))
        fileCopy.status = 'fail'
        // fileCopy.failMessage = '尺寸过大'
        let fileListCopy = [...this.fileList]
        fileListCopy.splice(index, 1, fileCopy)
        this.$emit('update:fileList', fileListCopy)
        let error = ''
        if (xhr.status === 0) {
          error = '网络无法连接'
        }
        this.$emit('error', error)
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
      doUploadFiles (formData, success, fail) {
        http[this.method.toLowerCase()](this.action, {success, fail, data: formData})
      },
      createInput () {
        this.$refs.temp.innerHTML = ''
        let input = document.createElement('input')
        input.accept = "image/png"
        input.type = 'file'
        input.multiple = true
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