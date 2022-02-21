<template>
  <div :class="prefixCls">
    <WordForm></WordForm>
  </div>
</template>

<script lang="ts" setup>
import WordForm from './Form.vue'
import { usePrefixCls } from '@/hooks/useSetting'
const prefixCls = usePrefixCls('word-list')
</script>

<style lang="scss">
.shete-word-list {
  width: 60%;
  margin: 20px;
}
</style>
