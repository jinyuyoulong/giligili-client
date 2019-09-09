<template>
  <div class="post-video">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="名称">
          <el-input v-model="form.Title"></el-input>
        </el-form-item>
        <el-form-item label="视频地址">
          <el-input v-model="form.URL"></el-input>
        </el-form-item>
        <el-form-item label="描述">
          <el-input type="textarea" v-model="form.Info"></el-input>
        </el-form-item>
        <el-form-item label="视频封面">
          <el-upload
            class="avatar-uploader"
            action=""
            label="描述"
            ref="upload"
            :http-request="fnUploadRequest"
            :before-upload="fnBeforeUpload"
            :show-file-list="false">
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            <div slot="tip" class="el-upload__tip"> 只能上传png图片，且大小不能超过500kb</div>
          </el-upload>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">提交</el-button>
        </el-form-item>
    </el-form>
  </div>
</template>
<script>
// @ is an alias to /src
import * as API from '@/api/video/'
import uploadAPI from '@/api/upload/'
export default {
  name: 'PostVideo',
  data () {
    return {
      imageUrl: '',
      form: {
        title: '',
        info: '',
        url: '',
        avatar: ''
      }
    }
  },
  methods: {
    fnBeforeUpload (file) {
      const isPNG = file.type === 'image/png'
      const isLt2M = file.size / 1024 / 1024 < 2

      if (!isPNG) {
        this.$message.error('上传头像图片只能是 PNG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return isPNG && isLt2M
    },
    fnUploadRequest (option) {
      uploadAPI(option.file.name).then((res) => {
        const oReq = new XMLHttpRequest()
        oReq.open('PUT', res.data.put, true)
        // request 成功的时候
        oReq.onload = () => {
          this.imageUrl = res.data.get
          this.form.avatar = res.data.key
        }
        oReq.send(option.file)
      }).catch((error) => {
        this.$$notify.error({
          title: '网络错误，或者服务器宕机',
          message: error
        })
      })
    },
    onSubmit () {
      API.postVideo(this.form).then((res) => {
        if (res.status === 0) {
          this.$notify({
            title: '投稿成功',
            message: `投稿ID为${res.data.id}`,
            type: 'success'
          })
        } else {
          this.$notify({
            title: '投稿失败',
            message: res.msg
          })
        }
        //   $notify : element 通知控件
      }).catch((error) => {
        this.$notify({
          title: '投稿失败',
          message: error
        })
      })
    }
  }
}
</script>
<style scoped lang="scss">
.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>
