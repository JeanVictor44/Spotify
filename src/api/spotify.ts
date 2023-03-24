import Axios from 'axios'
import { IAlbum } from '../types/Album';
import { IArtistDetails } from '../types/Artist';
import { ITrack } from '../types/Track';



export const spotifyAPI = Axios.create({
    baseURL: 'https://api.spotify.com/v1/',
}) 

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

export const fetcherAlbums = async (url: string): Promise<IAlbum[]> => {
    const token = await getSpotifyToken()

    const responseAlbums = await spotifyAPI.get(url, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    
    return responseAlbums.data.albums.items
}

export const fetcherAlbumDetails = async (url: string): Promise<IAlbum> => {
    const token = await getSpotifyToken()

    const albumDetails = (await spotifyAPI(url, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })).data as IAlbum

    return albumDetails
}

export const fetcherTrackDetails = async (url: string): Promise<ITrack> => {
    const token = await getSpotifyToken()
    const trackInfo = (await spotifyAPI.get(url, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })).data
    console.log(trackInfo)
    return trackInfo
}

export const fetcherArtistDetails = async (url: string): Promise<IArtistDetails> => {
    const token = await getSpotifyToken()
    const artistInfo = (await spotifyAPI.get(url, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })).data

    return artistInfo
}

