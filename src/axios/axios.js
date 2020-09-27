import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://192.168.56.1:5001/clone-6f00f/us-central1/api'
})

export default instance