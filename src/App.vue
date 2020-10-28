<!--
 * @Descripttion: 
 * @version: 
 * @Author: zml
 * @Date: 2020-10-09 13:44:43
 * @LastEditors: zml
 * @LastEditTime: 2020-10-10 17:16:10
-->
<template>
  <div id='root'>
    <router-view />
  </div>
</template>
<script>
import { ref } from 'vue'

export default {
  setup() {
    const count = ref(0)
    const inc = () => {
      count.value++
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
