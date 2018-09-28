import _ from 'lodash'
import {
    AppLang
} from '@internal/constants'

const callApi = (params, provider, skipAuth) => new Promise((resolve, reject) => {
    if (!params.url || params.url === '') {
        return reject(AppLang.msg.error.invalidRequest)
    }
    let { header } = params
    header = _.merge(header, {
        'Content-Type': 'application/json; charset=utf-8',
    })
    if (!skipAuth) {
        switch (provider) {
            default:
                header = _.merge(header, {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                })
                break
        }
    }
    return fetcher({
        ...params,
        header,
    }, resolve, reject)
})

const fetcher = (params, resolve, reject) => {
    if (!params.method) {
        return fetch(params.url, {
            headers: params.header,
            body: JSON.stringify(params.body),
            mode: 'cors',
            cache: 'no-cache',
            method: 'GET',
        })
            .then(response => resolve(response))
            .catch(() => reject(AppLang.msg.error.networkError))
    } else {
        return fetch(params.url, {
            headers: params.header,
            body: JSON.stringify(params.body),
            method: params.method,
            mode: 'cors',
            cache: 'no-cache',
        })
            .then(response => resolve(response))
            .catch(() => reject(AppLang.msg.error.networkError))
    }
}

export default {
    callApi,
}
