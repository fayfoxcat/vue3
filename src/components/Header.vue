<template>
  <div id="header">
    <div class="demo-input-suffix">
      <el-row>
        <span class="ml-3 w-35 text-gray-600 inline-flex items-center">Using attributes</span>
        <el-input
            v-model="input"
            maxlength="10"
            placeholder="Please input"
            show-word-limit
            type="text"
        />
      </el-row>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "@vue/runtime-core";
import {ref} from 'vue'

export default defineComponent({
  name: "Header",
  setup() {
    const input = ref('123')

    return {
      input,
    }
  }
})
</script>

<style scoped>
#header {
  border: solid #48ceff 1px;
  margin: auto;
  width: 90%;
}
</style>