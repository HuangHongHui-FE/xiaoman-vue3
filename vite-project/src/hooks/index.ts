import {onMounted} from 'vue';

type Options = {
    el: string
}

export default function (options:Options): Promise<{baseUrl: string}>{  //定义返回值
    return new Promise((resolve) => {
        onMounted(() => {
            let img:HTMLImageElement = document.querySelector(options.el) as HTMLImageElement;
            // console.log(img, "============================>")
            // 确保图片加载完毕
            img.onload = () => {
                resolve({
                    baseUrl: base64(img)
                })
            }
        })

        const base64 = (el:HTMLImageElement) => {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d')
            canvas.width = el.width;
            canvas.height = el.height;
            ctx?.drawImage(el, 0, 0, canvas.width, canvas.height);  //参数在笔记里
            // 先是剪切，再利用toDataURL转成base64
            return canvas.toDataURL('image/png');
        }
    })
}