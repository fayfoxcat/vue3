<template>
  <div id="header">
        <span>事项</span>
        <el-input
            v-model="input"
            maxlength="10"
            placeholder="请输入新增清单"
            show-word-limit
            type="text"
            style="width: 80%"
        />
  </div>
</template>

<script lang="ts">
import {defineComponent} from "@vue/runtime-core";
import {ref} from 'vue'

export default defineComponent({
  name: "Header",
  setup() {
    const input = ref('')

    return {
      input,
    }
  }
})
</script>

<style lang = "scss" scoped>
#header {
  border: solid #48ceff 1px;
  margin: auto;
  width: 90%;
  display:flex;
  justify-content:space-between;
  span{
    margin: auto;
  }
}
</style>