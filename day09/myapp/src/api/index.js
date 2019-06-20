import axios from 'axios';

const baseUrl = 'http://www.daxunxun.com';

export default {
  reqGetData (url) {
    return new Promise((resolve, reject) => {
      axios.get(baseUrl + url).then(res => {
        resolve(res.data)
      })
    })
  },
  reqPostData (url, params) {
    return new Promise((resolve, reject) => {
      axios.get(baseUrl + url, params).then(res => {
        resolve(res.data)
      })
    })
  }
}
