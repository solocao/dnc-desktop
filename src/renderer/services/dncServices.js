import api from '@/services/api'

export default {
  listMachines () {
    return api.get(`list_machines`)
      .then(response => response.data)
  }
}
