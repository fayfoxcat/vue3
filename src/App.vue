<template>
  <div>哈哈哈哈</div>
  <h3>{{user.name}}</h3>
  <button @click="update">更新</button>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
export default defineComponent({
  name: "App",
  setup() {
    const obj = {
      name: "张三",
    };
    const user = reactive(obj)
    
    const update = ()=>{
      user.name += '==='
    }
    return{
      user,
      update,
    }
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
