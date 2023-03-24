import { Link, useParams } from 'react-router-dom'
import { fetcherArtistDetails, fetcherTrackDetails } from '../../api/spotify'
import { fetcherLetter } from '../../api/vagalume'
import { AlbumItem } from '../../components/AlbumItem'
import { AudioPlayer } from '../../components/AudioPlayer'
import { formatDurationTrack } from '../../utils/formatDurationTrack'
import * as S from './style'
import arrowLeft from '../../assets/arrow-left.svg'
import useSWR from 'swr'


function TrackDetails(){
    const params = useParams()

    const {
            data: track, 
            isLoading: isLoadingTrack
        } = useSWR(`/tracks/${params.id}?market=BR`, fetcherTrackDetails)
    
    const {
            data: artist, 
            isLoading: isLoadingArtist
        } = useSWR(`/artists/${track?.artists[0].id}`, fetcherArtistDetails)
    
    const {
            data: letter, 
            isLoading: isLoadingLetter
        } = useSWR(`/search.php?api_key=${import.meta.env.VITE_VAGALUMES_API_KEY}&art=${track?.artists[0]?.name}&mus=${track?.name}`, fetcherLetter)


    if(isLoadingTrack || isLoadingArtist || isLoadingLetter){
        return (
            <h1>Loading</h1>
        )
    }
    return (
        <S.Container>
            
            <a className="spotify-link" target="_blank" href={track?.external_urls.spotify}>Ouvir no Spotify Original </a>
            
            <div>
                <Link to='/' className='link-return'>
                    <div>
                        <img src={arrowLeft} />
                    </div>
                    Voltar
                </Link>
                <S.ContainerInfos>
                    {
                        track && (
                            <AlbumItem 
                                id={track.album.id} 
                                size="big" 
                                albumImg={track.album.images[0].url} 
                                artists={track.artists[0].name} 
                                date={track.album.release_date} 
                                name={track.album.name}
                            />
                        )
                    }
                    
                    <div>
                        <img className="artist-img" src={artist?.images[2].url} />
                        <p>{artist?.genres.join(', ')}</p>
                    </div>
                    {
                        track && (
                            <p className='track-duration'>Duração: {formatDurationTrack(track.duration_ms)}</p>
                        )    
                    }
                    
                </S.ContainerInfos>
            
                <div className="track-letter">
                    <h1>Letra - {track?.name}</h1>
                    <p>
                        {
                            letter
                        }
                    </p>
                </div>

            </div>

            <AudioPlayer src={track?.preview_url} controls />
        </S.Container>
    )
}

export { TrackDetails }