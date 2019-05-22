<template>
  <div class="articles-page">
    <a-row type="flex" justify="end" class="tool-container">
      <a-input-search
        class="search-input"
        placeholder="搜索机床ip"
        style="width: 200px"
        v-model="keyword"
      />
      <a-button class="btn" type="danger" @click="fetch()">刷新列表</a-button>
      <a-button class="btn" type="danger" v-if="selectedRowKeys.length > 0">移除机床</a-button>
      <a-button class="btn" type="primary">手动添加机床</a-button>
    </a-row>
      <div class="content-container">
        <a-table :columns="columns"
        :rowKey="record => record.device_id"
        :dataSource="machinesList"
        :rowSelection="rowSelection"
        :loading="loading"
  >
  <template slot="operation" slot-scope="text, record, index">
        <span>
            <a-button type="primary" size='small' @click="listMachinesPrograms(record.room_id)">程序列表</a-button>
        </span>
        <span>
            <a-button size='small'>运行状态</a-button>
        </span>
          <span>
            <a-button type="danger" size='small'>下线关机</a-button>
        </span>
    </template>
  </a-table>
    </div>
  </div>
</template>

<script>
import dncServices from '../../services/dncServices'
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows)
  },
  onSelect: (record, selected, selectedRows) => {
    console.log(record, selected, selectedRows)
  },
  onSelectAll: (selected, selectedRows, changeRows) => {
    console.log(selected, selectedRows, changeRows)
  }
}
export default {
  data () {
    return {
      loading: true,
      keyword: '',
      selectedRowKeys: [],
      machinesList: [],
      rowSelection,
      columns: [{
        title: '设备id',
        dataIndex: 'device_id',
        sorter: true,
        width: '40%'
      },
      {
        title: '设备ip',
        dataIndex: 'ip',
        sorter: true,
        width: '40%'
      },
      {
        title: '操作',
        dataIndex: 'operation',
        scopedSlots: { customRender: 'operation' }
      }
      ]

    }
  },
  mounted () {
    this.fetch()
  },
  methods: {
    listMachinesPrograms (roomId) {
      this.$router.push({
        name: `machinesPrograms`,
        params: {
          roomId: roomId
        }
      })
    },
    fetch (params = {}) {
      var that = this
      that.loading = true
      dncServices.listMachines().then(function (machinesList) {
        console.log(machinesList)
        that.machinesList = machinesList
        that.loading = false
      })
    }
  }
}
</script>

<style>
</style>
