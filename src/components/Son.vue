<template>
    <h3 :style="{color}">Son组件</h3>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue'

export default defineComponent({
    name: 'Son',
    setup () {
        const color = inject('color')
        return {
            color,
        }
    }
})
</script>

<style scoped>

</style>