import axios from 'axios';

declare module 'axios' {
    export interface AxiosResponse<T = any> extends Promise<T> {
        code: number;
    }
}

const http = axios.create({
    baseURL: process.env.VUE_APP_API, // api的base_url
    timeout: 5000, // 请求超时时间
});

http.interceptors.request.use(
    config => {
        return config;
    },
    err => {
        console.log(err);
    }
);
//添加一个响应拦截器
http.interceptors.response.use(
    res => {
        const { data } = res;

        return data;
    },
    err => {
        alert('服务器异常');
    }
);

export default http;
