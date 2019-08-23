<template>
  <div class="post-video">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="名称">
          <el-input v-model="form.Title"></el-input>
        </el-form-item>

        <el-form-item label="描述">
          <el-input type="textarea" v-model="form.Info"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="onSubmit">提交</el-button>
        </el-form-item>
    </el-form>
  </div>
</template>

<script>
// @ is an alias to /src
import * as API from '@/api/video/';

export default {
    name: 'PostVideo',
    data() {
      return {
        form: {
          Title: '',
          Info: ''
        }
      }
    },
    methods: {
      onSubmit() {
          API.postVideo(this.form).then((res)=>{
            //   $notify : element 通知控件
            this.$notify({
                title: '投稿成功',
                message:`投稿ID为$(res.data.id)`,
                type: 'success',
            });
          }).catch((error) => {
              this.$notify({
                title: '投稿失败',
                message: error,
              })
             
          })
      }
    }
  }
</script>
<style scoped lang="scss">
.post-video{
  margin: 20px;
}
</style>