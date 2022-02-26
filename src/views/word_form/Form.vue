<template>
  <CardBox title="2022-2-20  星期日" icon="icon-danci">
    <a-form
      ref="formRef"
      :model="wordFormData"
    >
      <a-space
        v-for="(word, index) in wordFormData.words"
        :key="word.id"
        style="display: flex; margin-bottom: 8px"
        align="baseline"
      >
        <a-form-item
          :name="['words', index, 'enWord']"
          :rules="{
            required: true,
            message: '英文不能为空',
          }"
        >
          <a-input v-model:value="word.enWord" placeholder="英文" />
        </a-form-item>
        <a-form-item
          :name="['words', index, 'cnWord']"
          :rules="{
            required: true,
            message: '中文翻译不能为空',
          }"
        >
          <a-input v-model:value="word.cnWord" placeholder="中文" />
        </a-form-item>
        <MinusCircleOutlined @click="removeUser(word)" />
      </a-space>
      <a-form-item>
        <a-button type="dashed" block @click="addUser">
          <PlusOutlined />
          添加单词
        </a-button>
      </a-form-item>
      <a-form-item style="text-align: right">
        <a-button type="primary" html-type="submit">完成今日计划</a-button>
      </a-form-item>
    </a-form>
  </CardBox>
</template>
<script lang="ts" setup>
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons-vue'
import CardBox from '@/components/cardBox/index.vue'
import BasicForm from '@/components/Form/BasicForm.vue'
import { ref, reactive } from 'vue'
interface Word {
  enWord: string;
  cnWord: string;
  id: number;
}
const formRef = ref<any>('')
const wordFormData = reactive<{ words: Word[] }>({
  words: []
})
const removeUser = (item: Word) => {
  const index = wordFormData.words.indexOf(item)
  if (index !== -1) {
    wordFormData.words.splice(index, 1)
  }
}
const addUser = () => {
  wordFormData.words.push({
    enWord: '',
    cnWord: '',
    id: Date.now()
  })
}
</script>
