<template>
   <div class="gulu-uploader">
      <div @click="onClickUpload" ref="trigger" style="margin-bottom: 1em;">
         <slot></slot>
      </div>
      <div style="width: 0;height: 0;overflow: hidden;" ref="temp"></div>
      <ol class="gulu-uploader-fileList">
         <li v-for="(file,index) in fileList" :key="index">
            <template v-if="file.status === 'uploading'">
               <g-icon class="gulu-uploader-icon" name="loading"></g-icon>
            </template>
            <template v-else-if="file.type.indexOf('image') === 0">
               <img :src="file.url" alt="" class="gulu-uploader-image">
            </template>
            <template v-else>
               <div class="gulu-uploader-defaultImage"></div>
            </template>
            <span class="gulu-uploader-name" :class="{[file.status]:file.status}"> {{file.name}} </span>
            <g-button @click="onRemoveFile(file)">删除</g-button>
         </li>
      </ol>
   </div>
</template>

<script>
   import GButton from './button/button'
   import GIcon from './icon'
   import http from './http'

   export default {
      name: "GuluUploader",
      components: {GButton, GIcon},
      data() {
         return {
            url: 'about:blank'
         }
      },
      props: {
         action: {
            type: String,
            required: true
         },
         name: {
            type: String,
            required: true
         },
         method: {
            type: String,
            default: "POST"
         },
         parseResponse: {
            type: Function,
            required: true
         },
         fileList: {
            type: Array,
            default: () => []
         },
         sizeLimit: {
            type: Number
         },
         accept: {
            type: String,
         },
         multiple: {
            type: Boolean,
            default: false
         }
      },
      methods: {
         onRemoveFile(file) {
            let answer = window.confirm('你确定要删除嘛')
            if (answer) {
               let copy = [...this.fileList]
               let index = copy.indexOf(file)
               copy.splice(index, 1)
               this.$emit('update:fileList', copy)
            }
         },
         onClickUpload() {
            let input = this.createInput()
            input.addEventListener('change', () => {
               this.uploadFiles(input.files)
               input.remove()
            })
            input.click()
         },
         beforeUploadFiles(rawFiles, newNames) {
            rawFiles = Array.from(rawFiles)
            for (let i = 0; i < rawFiles.length; i++) {
               let {size} = rawFiles[i]
               if (size > this.sizeLimit) {
                  this.$emit('error', '文件大于2MB')
                  return false
               }
            }
            let x = rawFiles.map((f, i) => {
               let {size, type} = rawFiles[i]
               return {name: newNames[i], size, type, status: 'uploading'}
            })
            this.$emit('update:fileList', [...this.fileList, ...x])
            return true
         },
         uploadFiles(rawFiles) {
            let newNames = []
            for (let i = 0; i < rawFiles.length; i++) {
               let rawFile = rawFiles[i]
               let {name} = rawFile
               let newName = this.generateName(name)
               newNames[i] = newName
            }

            if (!this.beforeUploadFiles(rawFiles, newNames)) {
               return
            }
            for (let i = 0; i < rawFiles.length; i++) {
               let rawFile = rawFiles[i]
               let newName = newNames[i]
               let formDate = new FormData()
               formDate.append(this.name, rawFile)
               this.doUploadFile(formDate, (res) => {
                  let url = this.parseResponse(res)
                  this.afterUploadFile(newName, url)
               }, (xhr) => {
                  this.fileUploadError(xhr, newName)
               })
            }
         },
         afterUploadFile(newName, url) {
            let file = this.fileList.filter(f => f.name === newName)[0]
            let index = this.fileList.indexOf(file)
            let copy = JSON.parse(JSON.stringify(file))
            copy.url = url
            copy.status = 'success'
            let fileListCopy = [...this.fileList]
            fileListCopy.splice(index, 1, copy)
            this.$emit('update:fileList', fileListCopy)
            this.$emit('uploaded')
         },
         generateName(name) {
            while (this.fileList.filter(f => f.name === name).length > 0) {
               let dotIndex = name.lastIndexOf('.')
               let nameWithoutExtension = name.substring(0, dotIndex)
               let extension = name.substring(dotIndex)
               name = nameWithoutExtension + '(1)' + extension
            }
            return name
         },
         doUploadFile(formDate, success, fail) {
            console.log('上传')
            http[this.method.toLowerCase()](this.action, {success, fail, data: formDate})
         },
         createInput() {
            this.$refs.temp.innerHTML = ''
            let input = document.createElement('input')
            if (this.accept) {
               input.accept = this.accept
            }
            input.type = 'file'
            input.multiple = this.multiple
            this.$refs.temp.appendChild(input)
            return input
         },
         fileUploadError(xhr, newName) {
            let file = this.fileList.filter(f => f.name === newName)[0]
            let index = this.fileList.indexOf(file)
            let fileCopy = JSON.parse(JSON.stringify(file))
            fileCopy.status = 'fail'
            let fileListCopy = [...this.fileList]
            fileListCopy.splice(index, 1, fileCopy)
            /*
                        if () {

                        }
            */
            this.$emit('error', '未知错误，上传失败')
            this.$emit('update:fileList', fileListCopy)

         }
      }
   }
</script>

<style scoped lang="scss">
   @import "../styles/var";

   .gulu-uploader {
      &-fileList {
         list-style: none;

         > li {
            border: 1px solid darken($grey, 10%);
            margin-bottom: 1em;
            display: flex;
            align-items: center;
         }
      }

      &-icon {
         @include spin
      }

      &-defaultImage, &-image {
         border: 1px solid $grey;
         height: 32px;
         width: 32px;
      }

      &-name {
         margin-left: 1em;
         margin-right: auto;
         line-height: 32px;

         &.success {
            color: green;
         }

         &.fail {
            color: red;
         }
      }
   }

</style>