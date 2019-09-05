import axios from 'axios'

// 创建视频
const postVideo = form => axios.post('/api/v1/videos', form).then(res => res.data)

// 视频详情
const getVideo = id => axios.get(`/api/v1/video/${id}`).then(res => res.data)

// 视频列表
const getVideos = () => axios.get('/api/v1/videos').then(res => res.data)

export {
  getVideo,
  getVideos,
  postVideo
}
