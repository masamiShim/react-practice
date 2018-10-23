export class RestClient {
    static get = (url: string) => {
        return RestClient.request(url, {}, 'GET', 200, '')
    }

    static post = (url: string, data: {}) => {
        return RestClient.request(url, { 'Content-type': 'application/json' }, 'POST', 200, JSON.stringify(data))
    }

    static put = (url: string, data: {}) => {
        return RestClient.request(url, { 'Content-type': 'application/json' }, 'PUT', 200, JSON.stringify(data))
    }

    static delete = (url: string) => {
        return RestClient.request(url, {}, 'DELETE', 200, '')
    }

    private static request = (url: string, headers: {[key: string]: string}, method: string, status: number, stringData: string) => {
        return new Promise(((resolve, reject) => {
            const req = new XMLHttpRequest()
            req.open(method, url, true)
            for (let key in headers) {
                if (headers.hasOwnProperty(key)) {
                    req.setRequestHeader(key, headers[key])
                }
            }
            req.onreadystatechange = () => {
                if (req.readyState === XMLHttpRequest.DONE) {
                    if (req.status === status) {
                        resolve(req.responseText)
                    } else {
                        reject(new Error(req.statusText))
                    }
                }
            }
            req.onerror = () => {
                reject(new Error(req.statusText))
            }
            req.send(stringData === '' ? null : stringData)
        }))
    }
}
