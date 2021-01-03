import axios from 'axios'

//最终版本

export function  request(config) {
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:7878/api/m5',
    timeout: 5000
  })
  instance.interceptors.request.use(config => {
    return config
  },error => {})

  instance.interceptors.response.use(res => {
    return res.data
  },err => {})
  //axios其实就是返回一个Promise
  return instance(config)
}
