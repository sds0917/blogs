import axios from 'axios'
import {Message} from 'element-ui';

axios.interceptors.request.use(config => {
    return config
}, error => {
    Message.error({
        message: '加载超时'
    })
    return Promise.reject(error)
});

axios.interceptors.response.use(data => {
    // 异常信息校验
    if (!data || !data.data) {
        return data;
    }
    return data.data
}, error => {
    // 异常统一处理
    Message.error({
        message: '错误！'
    });
    return error;
});

const defaultConfig = {
    baseURL: 'http://localhost:8000',
    timeout: 20 * 60 * 1000,
    withCredentials: true
}

export default options => {
    return new Promise((resolve, reject) => {
        axios({
            ...defaultConfig,
            ...options
        }).then(response => {
            resolve(response);
        }).catch((error) => {
            console.log(error);
            reject(error);
        })
    })
}
