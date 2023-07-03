import axios from 'axios'

export default axios.create({
  baseURL: 'https://0ba2-87-227-122-215.ngrok-free.app',
  headers: { 'ngrok-skip-browser-warning': 'true' },
})
