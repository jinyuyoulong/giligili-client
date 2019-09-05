<template>
  <div class="post-video">
      <el-row :gutter="20">
          <el-col :span="15">
              <video-player class="video-player-box"
                 :options="playerOptions">
              </video-player>
          </el-col>
      </el-row>
  </div>
</template>
<script>
import 'video.js/dist/video-js.css'

import { videoPlayer } from 'vue-video-player'
import * as API from '@/api/video/'

export default {
  name: 'ShowVideo',
  data () {
    return {
      playerOptions: {
        // videojs options
        fluid: true,
        sources: [{
          type: 'video/mp4',
          src: ''
        }],
        poster: '/static/images/author.jpg'
      }
    }
  },
  mounted () {
    console.log('this is current player instance object', this.player)
  },
  beforeMount () {
    this.load()
  },
  methods: {
    load () {
      API.getVideo(this.$route.params.videoID).then((res) => {
        console.log(res)
        this.video = res.data
        this.playerOptions.sources[0].src = this.video.url
      })
    }
  },
  components: {
    videoPlayer
  }
}
</script>
<style scoped lang="scss">
</style>
