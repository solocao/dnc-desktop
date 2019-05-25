<template>
  <a-form
    :form="form"
    @submit="handleSubmit"
  >
    <a-form-item
      label="服务器地址"
      :label-col="{ span: 5 }"
      :wrapper-col="{ span: 12 }"
    >
      <a-input
        v-decorator="[
          'server_address',
          {rules: [{ required: true, message: '' }], initialValue: server_address}
        ]"
      />
    </a-form-item>
        <a-form-item
      label="加密key值:16位16进制"
      :label-col="{ span: 5 }"
      :wrapper-col="{ span: 12 }"
    >
      <a-input
        v-decorator="[
          'key',
          {rules: [{ required: true, message: '' , max: 16, min: 16}], initialValue: enc.key}
        ]"
      />
    </a-form-item>
        </a-form-item>
        <a-form-item
      label="加密偏移值:16位16进制"
      :label-col="{ span: 5 }"
      :wrapper-col="{ span: 12 }"
    >
      <a-input
        v-decorator="[
          'iv',
          {rules: [{ required: true, message: '' ,max: 16, min: 16}], initialValue: enc.iv}
        ]"
      />
    </a-form-item>
    <a-form-item
      :wrapper-col="{ span: 12, offset: 5 }"
    >
      <a-button
        type="primary"
        html-type="submit"
      >
        Submit
      </a-button>
    </a-form-item>
  </a-form>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'

export default {
  data () {
    return {
      formLayout: 'horizontal',
      form: this.$form.createForm(this)
    }
  },

  computed: {
    ...mapGetters([
      'server_address',
      'enc'
    ])
  },
  methods: {
    ...mapMutations([
      'set_server_address',
      'set_enc'
    ]),
    handleSubmit (e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          this.set_server_address(values.server_address)
          this.set_enc({
            key: values.key,
            iv: values.iv
          })
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