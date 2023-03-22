import Axios from 'axios'

export const getSpotifyToken = async () => {
    const CLIENT_ID = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
    const CLIENT_SECRET = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET;
    
    const response = await Axios.post('https://accounts.spotify.com/api/token', {
        grant_type: 'client_credentials',
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET
    }, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
        
    })

    return response.data.access_token
}


export const spotifyAPI = Axios.create({
    baseURL: 'https://api.spotify.com/v1/',
}) 