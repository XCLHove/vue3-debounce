/**
 * 函数防抖
 * @param fun 函数
 * @param delaySecond 延迟执行的秒数
 */
export function debounce(fun, delaySecond = 1) {
    let timerId;
    return function (...args) {
        clearTimeout(timerId);
        timerId = setTimeout(() => {
            fun.call(this, ...args);
        }, delaySecond * 1000)
    }
}