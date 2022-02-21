<template>
  <div :class="prefixCls">
    <WordList></WordList>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { usePrefixCls } from '@/hooks/useSetting'
import WordList from '@/views/word_form/WordList.vue'

export default defineComponent({
  name: 'HomeView',
  components: {
    WordList
  },
  setup () {
    const prefixCls = usePrefixCls('home')
    return {
      prefixCls
    }
  }
})
</script>

<style>
.shete-home {
  width: 100%;
  height: 100%;
}
</style>
