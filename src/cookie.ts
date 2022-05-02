const setCookie = (key, value) => localStorage.setItem(key, value)
const getCookie = (key) => localStorage.getItem(key)

const Cookie = { setCookie, getCookie }
export default Cookie