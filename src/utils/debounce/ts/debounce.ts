/**
 * 函数防抖
 * @param fun 函数
 * @param delaySecond 延迟执行的秒数
 */
export function debounce<A extends any[], R>(
    fun: (...args: A) => R,
    delaySecond = 1
): (...args: A) => void {
    let timer: number;
    return function (...args: A) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fun.call(this, ...args);
        }, delaySecond * 1000)
    }
}