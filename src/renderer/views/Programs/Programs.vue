<template>
<div>
      <a-row type="flex" justify="end" class="tool-container">
      <a-input-search
        class="search-input"
        placeholder="搜索程序"
        style="width: 200px"
        v-model="keyword"
      />
      <a-button class="btn" type="danger" @click="fetch()">刷新列表</a-button>
      <a-button class="btn" type="danger" v-if="selectedRowKeys.length > 0">删除程序</a-button>
      <a-button class="btn" type="primary" @click="add_program">新增程序</a-button>
    </a-row>
   <div class="content-container">
        <a-table :columns="columns"
        :rowKey="record => record.id"
        :rowSelection="rowSelection"
        :dataSource="program_list"
        :loading="loading"
  >
  </a-table>
    </div>
  </div>
</template>

<script>
import dncServices from '../../services/dncServices'
export default {
  data () {
    return {
      keyword: '',
      loading: true,
      program_list: [],
      selectedRowKeys: [],
      rowSelection: {},
      columns: [{
        title: '程序id',
        dataIndex: 'id',
        sorter: true,
        width: '20%'
      },
      {
        title: '程序名',
        dataIndex: 'name',
        sorter: true,
        width: '30%'
      },
      {
        title: '程序描述',
        dataIndex: 'desc',
        sorter: true,
        width: '30%'
      }
      ]
    }
  },
  methods: {
    fetch () {
      var that = this
      that.loading = true
      dncServices.listPrograms()
        .then(
          function (programs) {
            console.log(programs)
            that.program_list = programs
            that.loading = false
          }
        )
    },
    add_program () {
      this.$router.push({
        name: `add_program`
      })
    }

  },
  mounted () {
    this.fetch()
  }
}
</script>

<style>

</style>
