/**
 * 
 * @param num 待处理的数字
 * @returns 千分位后的数字
 */

function numFormat(num: number) {
    if (!num) return 0
    return num.toLocaleString()
}

export default numFormat