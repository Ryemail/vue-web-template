import axios from 'axios';
import { url } from "../public/var";

const ajax = axios.create({
    baseURL: url, // api的base_url
    timeout: 5000 // 请求超时时间
});


ajax.interceptors.request.use(config => {
    return config;
},
    err => {
        console.log(err)
    }
);
//添加一个响应拦截器
ajax.interceptors.response.use(res => {
    res = res.data;
    return res;
},
    err => {
        console.log(err)
    }
);

export default ajax;