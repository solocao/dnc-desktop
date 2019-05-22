import api from '@/services/api'

export default {
  listMachines () {
    return api.get(`list_machines`)
      .then(response => response.data)
  },
  listMachinesPrograms (roomId) {
    return api.get(`need_program_list/${roomId}`)
      .then(response => response.data)
  },
  getMachineByRoomId (roomId) {
    return api.get(`get_machine_by_room_id/${roomId}`)
      .then(response => response.data)
  },
  pong () {
    return api.get('pong')
  },
  listPrograms () {
    return api.get('list_programs').then(response => response.data)
  },
  uploadProgram (values) {
    return api.post('add_program', values).then(response => response.data)
  }
}
