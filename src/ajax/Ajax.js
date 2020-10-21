import axios from 'axios'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

// 1.配置基础路径和超时限制
const instance = axios.create({
    baseURL: '/api',
    timeout: 20000,
  });

//   2.添加进度条信息 nprogress

instance.interceptors.request.use(config => {
    NProgress.start();
    return config;
  });


  instance.interceptors.response.use(
    response => {
        NProgress.done();

        return response.data;
  },
   error => {
    NProgress.done();

    // 4.统一处理请求错误,具体请求也可以选择处理或不处理
    alert('发送ajax请求失败'+error.message || '未知错误')

    // 如果不想让它处理 中断Promise链 返回一个pending状态的 promise
    return new Promise(()=>{})
  });

  export default instance