<template>
  <div class="home">
    <del class="">
      <el-row :gutter="20">
        <el-col :span="6" v-for="video in videos" v-bind:key="video.id">
          <el-card class="videoCard" @click.native="goVideo(video)">
            <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="video-avatar">
            <div >
              <div class="video-title">{{ video.title }}</div>
              <div class="video-bottom clearfix">
                <span class="video-info">{{ video.info.substring(0, 40) }}</span>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
      <div class="block">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[2, 3]"
          :page-size="limit"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total">
        </el-pagination>
      </div>
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
      videos: [],
      start: 0,
      limit: 2,
      total: 0,
      currentPage: 0
    }
  },
  beforeMount () {
    this.load()
  },
  methods: {
    load () {
      API.getVideos(this.start, this.limit).then((res) => {
        this.videos = res.data.items
        this.total = res.data.total
      })
    },
    goVideo (video) {
      this.$router.push({ name: 'showVideo', params: { videoID: video.id } })
    },
    handleSizeChange (val) {
      this.limit = val
      this.load()
    },
    handleCurrentChange (val) {
      this.start = (val - 1) * this.limit
      this.load()
    }
  },
  comments: {
  }
}
</script>

<style scoped lang="scss">
.video-title{
  color: #303133;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden
}
.video-avatar{
  width: 100%
}
.video-info{
  color: #909399
}
.video-bottom{
  margin-bottom: 35px
}
.videoCard{
  // 光标 手指 切换
  cursor: pointer;
}
</style>
