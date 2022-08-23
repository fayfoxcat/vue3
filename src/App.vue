<template>
  <div>
    <h2>标题</h2>
    <Header/>
    <List/>
    <Footer/>
  </div>
</template>
<script lang="ts">
import {defineComponent} from "@vue/runtime-core";
import Header from "@/components/Header.vue"
import List from "@/components/List.vue"
import Footer from "@/components/Footer.vue"

export default defineComponent({
  name: 'App',
  components: {
    Header,
    List,
    Footer
  }

})
</script>

<style>
#app {
  border: solid #48ceff 1px;
  width: 30%;
  height: 300px;
  margin: 100px auto;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>