<template>
  <Child :msg="msg" msg2="真香" @xxx="xxx">
  
  </Child>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import Child from "@/components/Child.vue";
export default defineComponent({
  name: "App",
  components: {
    Child,
  },
  setup() {
    
    const msg = 'what are you no sha lei'
    const xxx = (name:any)=>{
      console.log(name+"：干的漂亮！")
    }
    return { 
      msg,
      xxx
    };
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
