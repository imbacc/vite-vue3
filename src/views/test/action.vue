<template>
  <div>
    <a href="javascript:history.back(-1)">返回上一页</a>
    <div>action</div>
    <button @click="test1">
      请求 test1
    </button>
    <button @click="test2">
      请求 test2
    </button>
    <button @click="test3">
      请求 test3
    </button>
    <button @click="test4">
      请求 test4
    </button>
    <button @click="test5">
      请求 test5
    </button>
    <button @click="auth">
      授权前往about
    </button>
    <hr>
    <button @click="all">
      给我一起请求
    </button>
  </div>
</template>

<script setup lang="ts">
const router = useRouter()
const authStore = useAuthStore()

const test1 = () => getTestApi()
const test2 = () => getTest222Api(222)
const test3 = () => getTest333Api({ is: 'param1111' }, { body: 'body123456' })

async function test4() {
  const res = await getTest333Api({ is: 'param2222' }, { body: 'body123456' })
  console.log('%c [ res.test ]-60', 'font-size:14px; background:#41b883; color:#ffffff;', res)
}

async function test5() {
  const res = await getTest444Api()
  console.log('%c [ res ]-33', 'font-size:14px; background:#41b883; color:#ffffff;', res)
}

function all() {
  const all: Array<Function> = [
    test1,
    test2,
    test3,
    test4,
    test5,
  ]
  const pro: Array<Promise<any>> = []
  all.forEach((request) => pro.push(request()))
  Promise.allSettled(pro).then((res) => setTimeout(() => console.log('Promise.allSettled=', res), 10))
}

function auth() {
  authStore.pushRouterAuth('about')
  router.push('/about')
}
</script>
