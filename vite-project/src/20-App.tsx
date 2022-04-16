import {ref} from 'vue'

let v = ref<string>('123');

let flag = true;

let arr = [1,2,3]


type Props = {
    title: string
}

const renderDom = (props: Props, ctx:any) => {
    return (
        <div>
            <div>hello tsx</div>
            <div>{v.value}</div>
            <input type="text" v-model={v.value}/>

            <div v-show={flag}>show</div>
            {/* v-if不支持，要这样写 */}
            {/* {
                flag ? <div>true<div/>: <div>false</div>
            } */}

            {
                arr.map(v => {
                    return (<div onClick={clickTap.bind(this, v, ctx)} data-index={v}>${v}</div>)
                })
            }


            <div>{props.title}</div>
        </div>
    )
}

const clickTap = (v: number, ctx:any) => {
    console.log('我被电了', v)
    // console.log('我被电了', ctx)
    ctx.emit('on-click', 123)
}


export default renderDom;