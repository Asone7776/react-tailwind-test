export const debounce = <T extends (...args: any[]) => void>(func: T, wait: number) => {

    let timer: ReturnType<typeof setTimeout> | null = null;
    return function (...args: Parameters<T>) {
        if (timer !== null) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            func(...args);
            timer = null;
        }, wait);
    }
}