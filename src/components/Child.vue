<template>
    <h3>子组件</h3>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, watch } from "vue";
export default defineComponent({
    name:'Child',
    beforeCreate(){
        console.log("2.x中的beforeCreate");
    },
    created(){
        console.log("2.x中的created");
    },
    beforeMount(){
        console.log("2.x中的beforeMount");
    },
    mounted(){
        console.log("2.x中的mounted");
    },
    beforeUpdate(){
        console.log("2.x中的beforeUpdate");
    },
    updated(){
        console.log("2.x中的updated");
    },
    beforeUnmount() {
        console.log("2.x中的beforeDestroy");
    },
    unmounted() {
        console.log("2.x中的destroyed");
    },
    setup() {
        return {

        };
    },
});
</script>