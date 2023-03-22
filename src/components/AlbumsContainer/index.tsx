import Axios  from 'axios'
import { useEffect, useState } from 'react'
import { getSpotifyToken, spotifyAPI } from '../../api/spotify'
import { AlbumItem } from '../AlbumItem'
import * as S from './style'

interface Album {
    name:string,
    release_date: string,
    id: string,
    artists: {
        name: string,
        id: string
    }[],
    total_tracks: number,
    images: {
        url: string,
        width: number,
        height:number
    }[]
}

function AlbumsContainer() {
    const [albums, setAlbums] = useState<Album[]>([])
    const [token, setToken] = useState('')

    useEffect(() => {
        (async() => {
            const token = await getSpotifyToken()
            setToken(token)

            const albums = await spotifyAPI.get('/search?q=Imagine Dragons&type=album&market=BR', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            setAlbums(albums.data.albums.items)

        })()
    },[])
    
    return (
        <S.Container>
            <h3>Resultados encontrados para: “Imagine Dragons”</h3>
            <S.AlbumsGrid>
                {
                    albums.map((album) => (
                        <AlbumItem name={album.name} albumImg={album.images[1].url} singer={album.artists[0].name} date={album.release_date}/>
                    ))
                }
            </S.AlbumsGrid>
        </S.Container>
    )
}
export { AlbumsContainer }