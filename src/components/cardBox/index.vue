<template>
  <div :class="prefixCls">
    <div :class="`${prefixCls}-title`">
      <Icon v-if="icon" size="20" :icon="icon"></Icon>
      <span v-if="title">{{title}}</span>
    </div>
    <div :class="`${prefixCls}-content`">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import Icon from '../iconSvg/icon.vue'
import { usePrefixCls } from '@/hooks/useSetting'
const prefixCls = usePrefixCls('card-box')
defineProps({
  title: String,
  icon: String
})
</script>

<style lang="scss" scoped>
  .shete-card-box {
    border-radius: 20px;
    border: none;
    background-color: $--color-bg;
    &-title {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      padding: 10px 20px;
      font-weight: bold;
      span {
        margin-left: 10px;
      }
    }
    &-content{
      padding: 20px;
    }
  }
</style>
