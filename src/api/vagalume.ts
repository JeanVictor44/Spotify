import Axios from 'axios'

export const vagalumeApi = Axios.create({
    baseURL: 'https://api.vagalume.com.br/',
})

export const fetcherLetter = async (url: string): Promise<string> => {
    const letter = (await vagalumeApi.get(url)).data
    const letterResolve = letter.type === 'song_notfound' || letter.type === 'notfound'  ? 'Letra não disponível' : letter.mus[0].text
    return letterResolve
}