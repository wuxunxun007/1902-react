import axios from 'axios';

const baseUrl = 'http://www.daxunxun.com/'

const requestGetData = (url) => {
  return new Promise((resolve, reject) => {
    axios.get(url).then(res => {
      resolve(res.data)
    })
  })
}

const requestPostData = (url, params) => {
  return new Promise((resolve, reject) => {
    axios.post(url, params).then(res => {
      resolve(res.data)
    })
  })
}

export default {
  requestGetData,
  requestPostData
}