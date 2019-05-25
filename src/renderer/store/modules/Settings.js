const state = {
  server_address: 'http://dnc.save1s.com:5000',
  key: '1234123412ABCDEF',
  iv: 'ABCDEF1234123412'
}

const getters = {
  server_address: state => {
    return state.server_address
  },
  enc: state => {
    return {key: state.key, iv: state.iv}
  }
}
const mutations = {
  set_server_address (state, serverAddress) {
    state.server_address = serverAddress
  },
  set_enc (state, encData) {
    state.key = encData.key
    state.iv = encData.iv
  }
}
export default {
  state,
  getters,
  mutations
}
