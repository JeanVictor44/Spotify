import Axios from 'axios'

export const vagalumeApi = Axios.create({
    baseURL: 'https://api.vagalume.com.br/',
})