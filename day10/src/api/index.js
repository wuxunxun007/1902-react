import axios from 'axios';
// 当前项目此处判断不到，如果是 脚手架 create-react-app   @vue/cli 
// const isDev = process.env.NODE_ENV === 'development'; // 当运行 npm run dev 时 条件为真()
const isDev = true; // 用脚手架时去掉它，用上面那一句
console.log(process.env);
const ajax = axios.create({
  // npm run dev 请求base地址为 'http://www.daxunxun.com'
  // npm run build 请求的为真实的地址
  baseURL: isDev ? 'http://www.daxunxun.com' : '真实的请求地址'
})

// 添加请求拦截器 ---- 所有的请求都想要加一个loading的动画效果，如果判断登陆状态
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  const newConfig = config;
  // 显示loading
  // 如果请求的接口都需要token
  // newConfig.headers['token'] = window.localStorage.getItem('token')
  return newConfig;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});
// {
//   code: 200,(可能定义的是其他的数值)
//   errorMsg: '***',
//   data: []   /  {}
// }
// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  // 取消loading效果
  return response;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});

// 一个文件暴露更多的内容
export const getHomeBanner = () => {
  return ajax.get('/banner')
}
export const getHomePro = () => {
  return ajax.get('/douban')
}

export const login = (params) => {
  return ajax.post('/users/login', params)
}
