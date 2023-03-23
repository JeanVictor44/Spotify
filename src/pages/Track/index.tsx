import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getSpotifyToken, spotifyAPI } from '../../api/spotify'
import { AlbumItem } from '../../components/AlbumItem'
import { ITrack } from '../../types/Track'
import * as S from './style'

function Track(){
    const [token, setToken] = useState('')
    const [trackInfo, setTrackInfo ] = useState({} as ITrack)
    const [loading, setLoading ] = useState(true)
    const params = useParams()

    useEffect(() => {
        (async() => {
            
            const token = await getSpotifyToken()
            setToken(token)
            
            const trackInfo = await spotifyAPI.get(`/tracks/${params.id}?market=BR`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            setTrackInfo(trackInfo.data)
            setLoading(false)
            console.log(trackInfo)

        })()
    },[])

    if(loading){
        return (
            <h1>Loading</h1>
        )
    }
    return (
        <S.Container>
            <AlbumItem id={trackInfo.album.id} size="big" albumImg={trackInfo.album.images[0].url} artists={trackInfo.artists[0].name} date={trackInfo.album.release_date} name={trackInfo.album.name}/>
            <audio controls>
                <source src={trackInfo.preview_url} />
            </audio>
        </S.Container>
    )
}

export { Track }