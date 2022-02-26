<template>
  <a-input
    v-bind="getBindValue"
    :class="prefixCls"
  ></a-input>
</template>

<script lang="ts">
import { reactive, toRefs, defineComponent, computed } from 'vue'
import { usePrefixCls } from '@/hooks/useSetting'

export default defineComponent({
  setup (props, { emit, attrs }) {
    const state = reactive({
      formData: {}
    })
    const prefixCls = usePrefixCls('base-input')
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

<style scoped>

</style>
