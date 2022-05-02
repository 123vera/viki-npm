/**
 * 
 * @param array 待处理的数组
 * @returns  处理后 数组去重及排序
 */
function arrFormat(array) {
    const arr = []
    if (array.length <= 0) return []
    for (let i = 0; i < array.length; i++) {
        if (!arr.includes(array[i])) {
            arr.push(array[i])
        }
    }
    return arr.sort((a, b) => Number(a) - Number(b))
}

export default arrFormat