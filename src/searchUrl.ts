
/**
 * 
 * @param url 携带参数的url
 * @returns  {key: value}
 */

export default function getUrlParams(url: string) {
    if (!url) return ''

    let paramsArr = url.split('?')[1].split('#')[0].split('&')
    let obj = {}
    paramsArr.map(i => {
        let [k, v] = i.split('=')
        obj = {
            ...obj,
            [k]: v
        }
    }
    )
    return obj
}

