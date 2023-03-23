import Axios from 'axios'

export const vagalumesApi = Axios.create({
    baseURL: 'https://api.vagalume.com.br/',
})