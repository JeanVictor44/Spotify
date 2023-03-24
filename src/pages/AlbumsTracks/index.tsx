import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { getSpotifyToken, spotifyAPI } from '../../api/spotify'
import { AlbumItem } from '../../components/AlbumItem'
import { IAlbum } from '../../types/Album'
import { convertMilisecondsToMinutes } from '../../utils/convertMilisecondsToMinutes'
import { formatDurationMinutes } from '../../utils/formatDurationMinutes'
import * as S from './style'
import arrowLeft from '../../assets/arrow-left.svg'

function AlbumsTracks(){
    const [albumInfo, setAlbumInfo] = useState<IAlbum>({} as IAlbum)
    const [loading, setLoading] = useState(true)
    const [token, setToken] = useState('')

    const params = useParams()
    
    useEffect(() => {
        (async() => {
            
                const token = await getSpotifyToken()
                // adicionar event listener para mudar o token, adicionar o token no context
                setToken(token)
            
            
            const response = await spotifyAPI(`/albums/${params.id}?market=BR`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            
            setAlbumInfo(response.data)
            setLoading(false)
        })()
    }, [])
    
    if(loading){
        // Adicionar loading
        return <h1>Loading...</h1>
    }

    return (
        <S.Container>
            <Link to='/'>
                <img src={arrowLeft} />
            </Link>
            <AlbumItem size="big" albumImg={albumInfo?.images[0]?.url} artists={albumInfo?.artists[0]?.name} date={albumInfo.release_date} name={albumInfo.name} id={albumInfo.id}/>
            <S.TracksList>
                {
                    albumInfo.tracks.items.map((track,index) => (
                        
                        <li key={index}>
                            <Link to={`/track/${track.id}`}>
                                <span className="track-number">{index + 1}.</span>
                                <span className="track-name">{track.name}</span>
                                <span className="track-duration">{formatDurationMinutes(convertMilisecondsToMinutes(track.duration_ms)) }</span>
                            </Link>
                        </li>
                    ))
                }
            </S.TracksList>
        </S.Container>
    )
}

export { AlbumsTracks }