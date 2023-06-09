import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { AlbumItem } from '../../components/AlbumItem'
import { formatDurationTrack } from '../../utils/formatDurationTrack'
import * as S from './style'
import arrowLeft from '../../assets/arrow-left.svg'
import useSWR from 'swr'
import { fetcherAlbumDetails } from '../../api/spotify'
import { Loading } from '../../components/Loading'

function AlbumsTracks(){
    const params = useParams()
    const { data: album,isLoading} = useSWR(`/albums/${params?.id}`,fetcherAlbumDetails)
    
    if(isLoading){
        return <Loading />
    }

    return (
        <S.Container>
            <Link to='/' className='link-return'>
                <div>
                <img src={arrowLeft} />
                </div>
                Voltar
            </Link>
            {
                album && (
                    <AlbumItem 
                        size="big" 
                        albumImg={album?.images[0]?.url} 
                        artists={album?.artists[0]?.name} 
                        date={album?.release_date} 
                        name={album?.name} 
                        id={album?.id} 
                    />
                )
            }
            <S.TracksList>
                {
                    album?.tracks?.items.map((track,index) => (
                        <li key={index}>
                            <Link to={`/track/${track.id}`}>
                                <span className="track-number">{index + 1}.</span>
                                <span className="track-name">{track.name}</span>
                                <span className="track-duration">{formatDurationTrack(track.duration_ms)}</span>
                            </Link>
                        </li>
                    ))
                }
            </S.TracksList>
        </S.Container>
    )
}

export { AlbumsTracks }