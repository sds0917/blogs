import request from '@/request'

function parseResult(result, resolve, reject) {
    if (result && result.status == 200 && result.code == 'ok') {
        resolve(result.data || [])
    } else {
        // 异常信息处理
        reject(result.fieldErrors)
    }
}

export let getList = (params) => {
    return new Promise((resolve, reject) => {
        request({
            method: 'get',
            url: '/user/list/' + params.pageNum + '/' + params.pageSize,
            params
        }).then(data => parseResult(data, resolve, reject)).catch(err => reject(err))
    })
}

export let findById = (id) => {
    return new Promise((resolve, reject) => {
        request({
            method: 'get',
            url: '/user/id/' + id
        }).then(data => parseResult(data, resolve, reject)).catch(err => reject(err))
    })
}

export let updateUser = (user) => {
    return new Promise((resolve, reject) => {
        request({
            method: 'put',
            url: '/user',
            data: user
        }).then(data => parseResult(data, resolve, reject)).catch(err => reject(err))
    })
}

export let saveUser = (user) => {
    return new Promise((resolve, reject) => {
        request({
            method: 'post',
            url: '/user',
            data: user
        }).then(data => parseResult(data, resolve, reject)).catch(err => reject(err))
    })
}

export let deleteUser = (ids) => {
    return new Promise((resolve, reject) => {
        request({
            method: 'delete',
            url: '/user/' + ids
        }).then(data => parseResult(data, resolve, reject)).catch(err => reject(err))
    })
}


