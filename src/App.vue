<template>
    <div>{{ color }}</div>
    <button @click="color = 'red'">红色</button>
    <button @click="color = 'yellow'">黄色</button>
    <button @click="color = 'green'">绿色</button>
    <Son />
</template>

<script lang="ts">
import { defineComponent, provide, ref } from 'vue'
import Son from '@/components/Son.vue'

export default defineComponent({
    name: 'App',
    component: {
        Son
    },
    setup() {
        const color = ref('red')
        provide('color', color)
        return {
            color,
        }
    }
})
</script>

<style scoped>
</style>