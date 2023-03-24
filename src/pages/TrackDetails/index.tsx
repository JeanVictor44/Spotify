import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getSpotifyToken, spotifyAPI } from '../../api/spotify'
import { vagalumeApi } from '../../api/vagalume'
import { AlbumItem } from '../../components/AlbumItem'
import { AudioPlayer } from '../../components/AudioPlayer'
import { ITrack } from '../../types/Track'
import { formatDurationTrack } from '../../utils/formatDurationTrack'
import * as S from './style'

interface IArtistDetails {
    name: string,
    genres: string[]
    images: {
        width: string,
        height: string,
        url: string
    }[],
    duration_ms: number
}
function TrackDetails(){
    const [token, setToken] = useState('')
    const [trackInfo, setTrackInfo ] = useState({} as ITrack)
    const [trackLetter, setTrackLetter] = useState('')
    const [artistInfo, setArtistInfo] = useState<IArtistDetails>({} as IArtistDetails)
    const [loading, setLoading ] = useState(true)
    const params = useParams()

    useEffect(() => {
        (async() => {
            
            const token = await getSpotifyToken()
            setToken(token)
            
            const trackInfo = (await spotifyAPI.get(`/tracks/${params.id}?market=BR`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })).data

            setTrackInfo(trackInfo)
            
            const artist = (await spotifyAPI.get(`/artists/${trackInfo.artists[0].id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })).data
            setArtistInfo(artist)
              
            
            const letter = (await vagalumeApi.get(`/search.php?api_key=${import.meta.env.VITE_VAGALUMES_API_KEY}&art=${trackInfo?.artists[0]?.name}&mus=${trackInfo.name}`)).data
            const letterResolve = letter.type === 'song_notfound' || letter.type === 'notfound'  ? 'Letra não disponível' : letter.mus[0].text
            setTrackLetter(letterResolve)
            setLoading(false)
            console.log(trackInfo)
            console.log(artist)
        })()
    },[])

    if(loading){
        return (
            <h1>Loading</h1>
        )
    }
    return (
        <S.Container>
            <a className="spotify-link" target="_blank" href={trackInfo.external_urls.spotify}>Ouvir no Spotify Original </a>

            <div>
                <S.ContainerInfos>
             
                    <AlbumItem id={trackInfo.album.id} size="big" albumImg={trackInfo.album.images[0].url} artists={trackInfo.artists[0].name} date={trackInfo.album.release_date} name={trackInfo.album.name}/>
                    <div>
                        <img className="artist-img" src={artistInfo.images[2].url} />
                        <p>{artistInfo.genres.join(', ')}</p>
                    </div>
                    <p className='track-duration'>Duração: {formatDurationTrack(trackInfo.duration_ms)}</p>
                </S.ContainerInfos>
            
                <div>
                    <h1>Letra - {trackInfo.name}</h1>
                    <p>
                        {
                            trackLetter
                        }
                    </p>
                </div>

            </div>

            <AudioPlayer src={trackInfo.preview_url} controls />
        </S.Container>
    )
}

export { TrackDetails }