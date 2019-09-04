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
        muted: true,
        fluid: true,
        language: 'en',
        playbackRates: [0.7, 1.0, 1.5, 2.0],
        sources: [{
          type: 'video/mp4',
          src: 'https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm'
        }],
        poster: '/static/images/author.jpg'
      }
    }
  },
  mounted () {
    console.log('this is current player instance object', this.player)
  },
  computed: {
    player () {
      return this.$refs.videoPlayer.player
    }
  },
  methods: {
    load () {
      API.getVideo(this.$router.params.videoID).then((res) => {
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
