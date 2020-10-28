<!--
 * @Descripttion: 
 * @version: 
 * @Author: zml
 * @Date: 2020-10-09 14:06:39
 * @LastEditors: zml
 * @LastEditTime: 2020-10-10 17:33:52
-->
<template>
    <div>
      <div v-for="(item,index) in list" :key="index">
        <div>
          <span>{{ item }}</span>
          <span v-if="index === 0">添加</span>
          <span>删除</span>
        </div>
      </div>
      <button @click="inc">去登录页面</button>
    </div>
</template>

<script>
import { ref ,root} from 'vue'
import { useRoute, useRouter,onBeforeRouteLeave,onBeforeRouteUpdate} from 'vue-router'

export default {
setup(props, { root }) {
  onBeforeRouteUpdate(() => {
    console.log('路由之前')
      // 当当前路由发生变化时，调用回调函数
    })
    onBeforeRouteLeave(() => {
   console.log('当当前页面路由离开的时候调用')
})
    const count = ref(0)
     // 获取当前路由
    const route = useRoute()
    // 获取路由实例
    const router = useRouter()
    const inc = () => {
         router.push("/login");
    }
    const list =ref( [
      'a','b','c'
    ])

    return {
      count,
      inc,
      list
    }
  }
}
</script>

<style scoped>
img {
  width: 200px;
}
h1 {
  font-family: Arial, Helvetica, sans-serif;
}
</style>
