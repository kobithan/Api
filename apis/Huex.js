import axios from 'axios'

export default axios.create({
    baseURL: 'http://oiikii.huex.xyz:8080/api/v1/service'
})