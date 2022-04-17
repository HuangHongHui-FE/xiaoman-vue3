import { defineStore } from "pinia";
import { Names } from "./store-name";


export const useTestStore = defineStore(Names.TEST, {
    state: () => {  //函数，返回个对象
        return {
            current: 1,
            name: '小满'
        }
    },

    // 类computed 修饰一些值
    getters: {

    },

    actions: {
        // 2.5
        setCurrent (num: number) {
            this.current = num
        }
    }
})