import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://kqc0b9jg52.execute-api.us-east-1.amazonaws.com/dev'
})

export default instance