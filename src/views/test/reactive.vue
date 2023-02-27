<script>
import {
  ref,
  reactive,
  computed,
  watch,
  getCurrentInstance,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
  onErrorCaptured,
} from 'vue'
import { useRouter } from 'vue-router'

export default {
  setup() {
    const count = ref(0)

    const { currentRoute } = useRouter()

    // 响应式属性
    const obj = reactive({ ddd: '1111' })

    // computed
    const two_count = computed(() => count.value * 2)

    // watch
    watch(
      () => count.value,
      (val) => console.log(`count is ${val}`),
    )

    const { ctx } = getCurrentInstance()
    console.log('ctx', ctx)
    console.log('currentRoute=', currentRoute.value)

    // function
    const add = () => count.value++

    onBeforeMount(() => {
      console.log('渲染前...')
    })

    onMounted(() => {
      console.log('渲染时...')
    })

    onBeforeUpdate(() => {
      console.log('更新前...')
    })

    onUpdated(() => {
      console.log('更新时...')
    })

    onBeforeUnmount(() => {
      console.log('销毁前...')
    })

    onUnmounted(() => {
      console.log('销毁时...')
    })

    onErrorCaptured(() => {
      console.log('错误捕获...')
    })

    return {
      obj,
      count,
      two_count,
      add,
    }
  },
}
</script>

<template>
  <a href="javascript:history.back(-1)">返回上一页</a>
  <div class="home">
    <h1>obj: {{ obj.ddd }}</h1>
    <h1>test count: {{ count }}</h1>
    <h1>count * 2 = {{ two_count }}</h1>
    <button @click="add">
      新增count
    </button>
    <hr>
    <h1>下面是组件部分</h1>
    <inject msg="我是子组件" />
  </div>
</template>
