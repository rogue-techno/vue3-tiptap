<template>
  <button class="vt-button"><slot>Button</slot></button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'VTButton'
})
</script>

<style scoped>
.vt-button {
  padding: 8px 12px;
  border-radius: 4px;
  border: 1px solid #d1d5db;
  background: #fff;
  cursor: pointer;
}
</style>
