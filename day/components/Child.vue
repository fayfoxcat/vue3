<template>
  <button @click="emitxxx">戳</button>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
export default defineComponent({
  setup(props, context) {
    // console.log(context.attrs.msg2);

    console.log(props);
    console.log(context)
    

    const emitxxx = () => {
      context.emit("xxx", "张三");
    };
    return {
      emitxxx,
    };
  },
});
</script>