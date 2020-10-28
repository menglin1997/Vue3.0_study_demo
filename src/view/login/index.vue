<!--
 * @Descripttion: 
 * @version: 
 * @Author: zml
 * @Date: 2020-10-09 14:06:39
 * @LastEditors: zml
 * @LastEditTime: 2020-10-10 17:10:43
-->
<template>
    <div>
      <button @click="inc">去首页</button>
    </div>
</template>

<script>
import { ref } from 'vue'
import { useRoute, useRouter} from 'vue-router'
export default {
  
setup() {
  // 获取当前路由
    const route = useRoute()
    // 获取路由实例
    const router = useRouter()
    const count = ref(0)
    const inc = () => {
        router.push("/home");
        console.log(route,'router')
    //   count.value++
    }

    return {
      count,
      inc
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
