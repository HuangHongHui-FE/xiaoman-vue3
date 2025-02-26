

### vite创建项目：

npm init vite@latest

选择项目名，依赖

cd vite-project

npm install
npm run dev



### 安装less:

```
npm install less less-loader -D
```



### ？？

```js
item = {
	name: ''
}

item.children  // undefined
item.children.length  // 报错
item.children?.length  // undefined
item.children?.length ?? []  // []  ??如果前面为undefined，就用[]

null ?? []  // []
0 ?? []   // 0
false??[]    // false
```



### 安装animate.css

```js
cnpm install animate.css -S
```



### 安装GSAP  

##### 做动画效果的

```js
cnpm install gsap -S
```



### 安装lodash

```js
cnpm install lodash -S
```

在ts里会报错，需要安装ts声明文件库

```js
npm install @type/lodash -D
```



### provide, inject源码：

provide，默认情况下，实例继承父类的provides对象，通过Object.create(parentProvides),

创建一个对象，将对象的原型指定为传入的对象

如果当前组件有自己的provide，他使用父provides对象作为原型来创建自己的provides对象，在inject只需要查询原型链就行



inject: 先看父级的provides，如果父级没有provides的值，就沿着原型链去,appContext上找

### getCurrentInstance返回当前实例的一些信息 ---- 17



### mitt  发布订阅模式的设计，EventBus

```js
nmp install mitt -S
```



### vue3支持tsx风格       20.

1. 

```js
npm install @vitejs/plugin-vue-jsx -D
```

2. ts.config.json配置

   ![image-20220416131144395](%E7%AC%94%E8%AE%B0.assets/image-20220416131144395.png)

3. vite.config.ts中配置

   ![image-20220416131559687](%E7%AC%94%E8%AE%B0.assets/image-20220416131559687.png)

### 自动引入ref,reactive等

1. 

```js
npm install -D unplugin-auto-import
```

2. 在vite.config.ts里进行各种各样的配置

   ```
   import AutoImport from 'unplugin-auto-import/vite'
   ```

   ```tsx
   export default defineConfig({
     plugins: [vue(), vueJsx(), AutoImport({
         imports: ['vue'],
         dts: 'src/auto-import.d.ts',// 声明文件存在的地址
         
     })]
   })
   ```



### vue2,3生命周期

![image-20220416162557421](%E7%AC%94%E8%AE%B0.assets/image-20220416162557421.png)

### 使用UI组件的时候的样式穿透的问题

```html
<tempalte>
	<div>
        <el-input class="ipt">
        	
        </el-input>
    </div>    
</template>


<style scoped lang="less">
    .ipt{
        /*就这里*/
        :deep(input) {
            background: red;
        }
    }
</style>
```

### Pinia  （插件）

完整的ts

压缩后的体积小

只有state, actions, getters

actions支持同步异步

代码扁平化，没有模块嵌套，只有store的概念，store之间自由使用，每个store都是独立的

store一旦创建就会自动添加

支持VUE3,vue2

**页面刷新状态也会丢失**

```js
cnpm install pinia -S
```

main.ts

```js
import {createPinia} from 'pinia'
const store = createPinia()
let app = createApp(App)
app.use(store)
app.mount('#app')
```

### storeToRefs原理：

首先将store拷贝原生的一份store = toRaw(store)， proxy的store变成object,

最终返回的是refs对象，循环store, 如果他是isRef(value) 或者isReactive(value)则拷贝一份refs[key] = toRef(store, key)





### vue3自定义hook函数  （网站   VueUse）

利用hooks有了好多功能

，相当于vue2的mixin，不同在于hooks是函数

提高代码复用性



### 自定义base64  Hooks

canvas的.drawImage()的参数

- img:   规定·要使用的图片，视频
- sx: 可选，开始剪的x坐标位置
- sy: 可选，开始剪切的y坐标的位置
- swidth: 可选，被剪切图像的宽度
- sheight:  可选，被剪切图像的高度
- x:   可选      在画布上放置图像x坐标的位置
- y:  可选     在画布上放置图像y坐标的位置
- width: 可选     要使用的图像的宽度
- height: 可选     要使用的图像的高度





### vue3移除了filter   API

### 安装vue-router

```
cnpm install vue-router -S
```

配置router/index.ts

main.ts里进行处理



#### history的实现

提供了pushSate与replaceState方法， 改变url的path不会引起页面的刷新。

history提供了类似hashchange的popstate事件，但有所不同：

 	1. 通过浏览器前进后退改变url时会触发popstate事件
 	2. 通过pushState/ replaceState或<a>标签改变url不会触发popstate
 	3. 我们可以拦截pushSate/replaceSate的调用和<a>标签的点击事件来检测url的变化
 	4. 通过js调用history的back, go, forward方法来触发该事件

监听url变化可以实现，知识没有hashchange那么方便







