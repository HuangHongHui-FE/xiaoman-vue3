import { defineStore } from "pinia";
import { Names } from "./store-name";

// 4.
type User = {
    name: string,
    age: number
}
let result:User = {
    name: '小满',
    age: 999
}

// 5.
const Login = ():Promise<User> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                name: '飞机',
                age: 999
            })
        }, 2000)
    })
}

export const useTestStore = defineStore(Names.TEST, {
    state: () => {  //函数，返回个对象
        return {
            current: 1,
            name: '小满',

            user: <User>{},
            user2: <User>{}
        }
    },


    actions: {
        // 2.5
        setCurrent (num: number) {
            this.current = num
        },

        // 4. 同步action
        setUser(){
            this.user = result
        },

        // 5. 异步action
        async setUser2(){
            const result = await Login();
            this.user2 = result;
            this.setName('打飞机')  // 里面再调用同步
        },
        setName(name:string){
            this.name = name
        }

    },

    // 类computed 修饰一些值
    getters: {
        // 6.1  
        newName():string {
            return `$-${this.name} - ${this.getUserAge}`  //中间也可以调用其他的函数
        },
        getUserAge():number{
            return this.user.age
        }
    }
})