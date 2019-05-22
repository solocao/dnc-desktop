<template>
<div>
  <a-breadcrumb>
    <a-breadcrumb-item><router-link to='/machines'>机床列表</router-link></a-breadcrumb-item>
    <a-breadcrumb-item><router-link to='#'>设备: {{machine.device_id}} 的程序清单</router-link></a-breadcrumb-item>
  </a-breadcrumb>
      <a-row type="flex" justify="end" class="tool-container">
      <a-input-search
        class="search-input"
        placeholder="搜索程序"
        style="width: 200px"
        v-model="keyword"
      />
      <a-button class="btn" type="danger" @click="fetch()">刷新列表</a-button>
      <a-button class="btn" type="danger" v-if="selectedRowKeys.length > 0">删除程序</a-button>
      <a-button class="btn" type="primary">添加程序</a-button>
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
      loading: true,
      divice_id: '',
      room_id: '',
      program_list: [],
      selectedRowKeys: [],
      rowSelection: {},
      machine: {},
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
      this.room_id = this.$route.params.roomId
      dncServices.listMachinesPrograms(this.room_id)
        .then(dncServices.getMachineByRoomId(this.room_id)
          .then(function (machine) {
            that.machine = machine
            if (machine.program_list) {
              var programList = machine.program_list.replace(/'/g, `"`)
              console.log(programList)
              that.program_list = JSON.parse(programList)
            } else {
              that.program_list = []
            }
            that.loading = false
          })
        )
    }

  },
  mounted () {
    this.fetch()
  }
}
</script>

<style>

</style>
