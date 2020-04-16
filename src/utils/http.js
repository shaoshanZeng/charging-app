import axios from 'axios' 
 import Vue from 'vue'
import { Toast } from 'vant' 
Vue.use(Toast); 
// 创建 axios实例
const service = axios.create({
    // 基地址 
   // baseURL: process.env.VUE_APP_BASE_API,
    baseURL: 'https://wxapi.dq.anhuayw.com/',
    // 请求时间
    timeout: 5000
})

// 请求拦截器
service.interceptors.request.use(config => { 
    config.headers['userId'] = "f759a7fd1dee44869434dc245bb5e3da";
    config.headers['userToken'] = "c21c8bc111144491b6276e66263cb909";
    config.headers['source'] = "Web_Server";
    // if (store.getters.token) {
    //     // 需要设置token请求头
    //     // 修改['token']
    //     config.headers['Authorization'] = getToken()
    // }
    return config
}, error => {
    // 可以在请求前报错时做相应处理
    console.log("请求报错", error)
    return Promise.reject(error)
})


// 响应拦截器
service.interceptors.response.use(response => {
  
    const result = response.data
    // 可以在请求返回响应前做相应处理 
    if (result.code != 'SUCCESS_SYS1001') {
        Toast(result.message || 'Error'); 
        return Promise.reject(new Error(result.message || 'Error'))
    } else {
        return result
    }
}, error => {
    console.log('响应报错', error)
    Toast(error.message || 'Error'); 
    return Promise.reject(error)
})


const http = {
    async get(url, param) {
        try {
            const response = await service.get(url, param);
            const { data, code, msg } = response.data;
            if (code != 'SUCCESS_SYS1001') {
                Toast(msg || 'Error'); 
 
            } else {
                console.log("resolve")
                return data
            }
        } catch (e) { console.log(e) }



    }, 
    async post(url, param) {
        try {
            const response = await service.post(url, param);
            console.log(response);
            const { data, code, msg } = response;
            if (code != 'SUCCESS_SYS1001') {
                Toast(msg || 'Error'); 
            } else {
                console.log("resolve")
                console.log(data)
                return data
            }
        } catch (e) {
            console.log(e)
        }

    }

}
export default http;