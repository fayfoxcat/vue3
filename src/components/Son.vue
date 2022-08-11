<template>
  <h3>hello</h3>
  <h3 :style="{color}">Son组件</h3>
  <button @click="update()">按钮</button>
</template>

<script lang="ts">
import {defineComponent, inject} from 'vue'

export default defineComponent({
  name: 'Son',
  setup() {
    const color = inject('color')
    const value = 123
    const update = inject('update', value)
    return {
      color,
      update
    }
  }
})
</script>

<style scoped>

</style>