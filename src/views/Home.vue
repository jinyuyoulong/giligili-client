<template>
  <div class="home">
    <del class="">
      <el-row :gutter="20">
        <el-col :span="4" v-for="vodie in videos" v-bind:key="vodie.id">
          <el-card >
            <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="video-avatar">
            <div >
              <span class="video-title">{{ vodie.title }}</span>
              <div class="video-bottom clearfix">
                <span class="video-info">{{ vodie.info }}</span>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </del>
  </div>
</template>

<script>
// @ is an alias to /src
import * as API from '@/api/video/'

export default {
  name: 'home',
  data () {
    return {
      // data 有一个初始属性，空数组
      videos: []
    }
  },
  beforeMount () {
    this.load()
  },
  methods: {
    load () {
      API.getVideos().then((res) => {
        this.videos = res.data
      })
    }
  },
  comments: {
  }
}
</script>

<style scoped lang="scss">
.video-title{
  color: #303133;
}
.video-avatar{
  width: 100%;
}
.video-info{
  color: #909399;
}
.video-bottom{
  margin-bottom: 35px;
}
</style>
