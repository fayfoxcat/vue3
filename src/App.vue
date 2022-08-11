<template>
  <div>{{ color }}</div>
  <button @click="color = 'red'">红色</button>
  <button @click="color = 'yellow'">黄色</button>
  <button @click="color = 'green'">绿色</button>
  <button @click="update('456')">app按钮</button>
  <Son/>
</template>

<script lang="ts">
import {defineComponent, provide, ref} from 'vue'
import Son from '@/components/Son.vue'

export default defineComponent({
  name: 'App',
  components: {
    Son
  },
  setup() {
    const color = ref('red')
    const update = ((value: string) => {
      console.log("abc"+value)
    })
    provide('color', color)
    provide('update', update)
    return {
      color,
      update
    }
  }
})
</script>

<style scoped>
</style>