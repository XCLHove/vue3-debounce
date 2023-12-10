import {customRef} from "vue";

export function debounceRef(value, delaySecond = 1) {
    let timerId;
    return customRef((track, trigger) => {
        return {
            get() {
                track();
                return value;
            },
            set(val) {
                clearTimeout(timerId);
                timerId = setTimeout(() => {
                    trigger();
                    value = val
                }, delaySecond * 1000);
            }
        }
    });
}