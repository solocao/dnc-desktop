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
      <a-table
        :columns="columns"
        :rowKey="record => record.id"
        :rowSelection="rowSelection"
        :dataSource="program_list"
        :loading="loading"
      >
        <template slot="operation" slot-scope="text, record, index">
          <span>
            <a-button type="primary" size="small" @click="downloadProgram(record.id)">下发到机床</a-button>
          </span>
        </template>
      </a-table>
    </div>
    <el-dialog title="下载到机床" :visible.sync="dialogVisible" width="50%">
      <a-checkbox-group  @change="onChange">
        <a-row>
            <a-col :span="24" v-for="machine in machinesList"><a-checkbox :value="machine.room_id">{{machine.device_id}}</a-checkbox></a-col>
        </a-row>
      </a-checkbox-group>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="handleDownload">下 载</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import dncServices from '../../services/dncServices'
export default {
  data () {
    return {
      currentProgramId: null,
      dialogVisible: false,
      machinesList: [],
      checkedValues: [],
      keyword: '',
      loading: true,
      program_list: [],
      selectedRowKeys: [],
      rowSelection: {},
      machines: [],
      columns: [
        {
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
        },
        {
          title: '操作',
          dataIndex: 'operation',
          sorter: true,
          width: '30%',
          scopedSlots: { customRender: 'operation' }
        }
      ]
    }
  },
  methods: {
    fetch () {
      var that = this
      that.loading = true
      dncServices.listPrograms().then(function (programs) {
        console.log(programs)
        that.program_list = programs
        that.loading = false
      })
    },
    fetchMachines (params = {}) {
      var that = this
      dncServices.listMachines().then(function (machinesList) {
        console.log(machinesList)
        that.machinesList = machinesList
      })
    },
    add_program () {
      this.$router.push({
        name: `add_program`
      })
    },
    showModal () {
      this.dialogVisible = true
    },
    handleOk (e) {
      console.log(e)
      this.visible = false
    },
    downloadProgram (programId) {
      console.log(programId)
      this.currentProgramId = programId
      this.dialogVisible = true
      this.fetchMachines()
    },
    handleClose () {},
    onChange (checkedValues) {
      console.log('checked = ', checkedValues)
      this.checkedValues = checkedValues
    },
    handleDownload () {
      this.checkedValues.forEach(roomId => dncServices.downloadProgram(this.currentProgramId, roomId))
      this.dialogVisible = false
    }
  },
  mounted () {
    this.fetch()
  }
}
</script>

<style>
</style>
