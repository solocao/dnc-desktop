<template>
  <a-form :form="form" @submit="handleSubmit">
    <a-form-item label="程序名称" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
      <a-input
        v-decorator="[
          'name',
          {rules: [{ required: true, message: '请输入程序名称' }]}
        ]"
      />
    </a-form-item>
    <a-form-item label="描述" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
      <a-input
        v-decorator="[
          'desc',
          {rules: [{ required: true, message: '请输入程序描述信息' }]}
        ]"
      />
    </a-form-item>
        <a-form-item label="代码" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
        <codemirror v-model="code" :options="cmOptions" ></codemirror>
    </a-form-item>

    <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
      <a-button type="primary" html-type="submit">提交程序</a-button>
    </a-form-item>
  </a-form>
</template>

<script>
import dncServices from '../../services/dncServices'

export default {
  data () {
    return {
      code: 'const a = 10',
      cmOptions: {
        // codemirror options
        tabSize: 4,
        mode: 'Text/X-Python',
        theme: 'base16-dark',
        lineNumbers: true,
        line: true
        // more codemirror options, 更多 codemirror 的高级配置...
      },
      formLayout: 'horizontal',
      form: this.$form.createForm(this)
    }
  },
  methods: {
    handleSubmit (e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          values.content = this.code
          console.log('Received values of form: ', values)
          dncServices.uploadProgram(values)
        }
      })
    },
    handleSelectChange (value) {
      console.log(value)
      this.form.setFieldsValue({
        note: `Hi, ${value === 'male' ? 'man' : 'lady'}!`
      })
    }
  }
}
</script>

<style>
</style>
