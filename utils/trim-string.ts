export type IOptions = {
    start?: number
    end?: number
}

const defaultOptions:IOptions = {
    start: 0,
    end: 100
}
export default function trimString(str:string, options?:IOptions) {
    const { start, end } = { ...defaultOptions, ...options }
    return str.length > end! ? str.slice(start, end) + "..." : str
}