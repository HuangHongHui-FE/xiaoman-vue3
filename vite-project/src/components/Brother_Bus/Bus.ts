// 实现bus总线传递事件
type BusClass = {
    emit: (name: string) => void  //自定义事件的名称
    on: (name: string, callback: Function) => void
}


type ParamsKey = string | number | symbol


// 事件调度中心
type List = {
    [key:ParamsKey]: Array<Function>
}


class Bus implements BusClass{
    list: List
    constructor() {
        this.list = {}
    }

    emit(name: string, ...args:Array<any>) {
        let eventName:Array<Function> = this.list[name];
        eventName.forEach(fn => {
            fn.apply(this, args)
        })
    }

    on(name: string, callback: Function) {
        let fn:Array<Function> = this.list[name] || []
        fn.push(callback)
        this.list[name] = fn
    }
}