<template>
  <div :class="prefixCls">
     <a-form
      ref="formRef"
      v-bind="getBindValue"
      :model="formData"
      name="basic_form"
     >
      <slot></slot>
    </a-form>
  </div>
</template>

<script lang="ts">
import { reactive, toRefs, defineComponent, computed } from 'vue'
import { usePrefixCls } from '@/hooks/useSetting'

export default defineComponent({
  setup (props, { emit, attrs }) {
    const state = reactive({
      formData: {}
    })
    const prefixCls = usePrefixCls('base-form')
    console.error(attrs)
    const getBindValue = computed(() => {
      return {
        ...attrs
      }
    })
    return {
      ...toRefs(state),
      prefixCls,
      getBindValue
    }
  }
})
</script>

<style lang="scss" scoped>

</style>
