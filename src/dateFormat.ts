import dayjs from 'dayjs'
/**
 * 
 * @param time 时间戳
 * @param foramt 格式化 
 * @returns 
 */
function dateFormat(time: number, foramt: string) {
    return dayjs(time).format(foramt)
}
export default dateFormat;