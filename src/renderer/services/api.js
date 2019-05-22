import axios from 'axios'

export default axios.create({
  baseURL: 'http://dnc.save1s.com:5000',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json'
  }
})
