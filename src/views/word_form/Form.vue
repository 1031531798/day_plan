<template>
  <CardBox title="2022-2-20  星期日" icon="icon-danci">
    <div>这是一个表单</div>
    <BasicForm id="wordForm">
      <a-space
        v-for="(user, index) in dynamicValidateForm.users"
        :key="user.id"
        style="display: flex; margin-bottom: 8px"
        align="baseline"
      >
        <a-form-item
          :name="['users', index, 'first']"
          :rules="{
            required: true,
            message: 'Missing first name',
          }"
        >
          <a-input v-model:value="user.first" placeholder="First Name" />
        </a-form-item>
        <a-form-item
          :name="['users', index, 'last']"
          :rules="{
            required: true,
            message: 'Missing last name',
          }"
        >
          <a-input v-model:value="user.last" placeholder="Last Name" />
        </a-form-item>
        <MinusCircleOutlined @click="removeUser(user)" />
      </a-space>
      <a-form-item>
        <a-button type="dashed" block @click="addUser">
          <PlusOutlined />
          Add user
        </a-button>
      </a-form-item>
      <a-form-item>
        <a-button type="primary" html-type="submit">Submit</a-button>
      </a-form-item>
    </BasicForm>
  </CardBox>
</template>
<script lang="ts" setup>
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons-vue'
import CardBox from '@/components/cardBox/index.vue'
import BasicForm from '@/components/Form/BasicForm.vue'
import { ref, reactive } from 'vue'
interface User {
  first: string;
  last: string;
  id: number;
}
const formRef = ref<any>('')
const dynamicValidateForm = reactive<{ users: User[] }>({
  users: []
})
const removeUser = (item: User) => {
  const index = dynamicValidateForm.users.indexOf(item)
  if (index !== -1) {
    dynamicValidateForm.users.splice(index, 1)
  }
}
const addUser = () => {
  dynamicValidateForm.users.push({
    first: '',
    last: '',
    id: Date.now()
  })
}
</script>
