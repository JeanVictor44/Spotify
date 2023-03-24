import Axios  from 'axios'
import { useEffect, useState } from 'react'
import { getSpotifyToken, spotifyAPI } from '../../api/spotify'
import { useHeaderSearch } from '../../context/HeaderSearchContext'
import { IAlbum } from '../../types/Album'
import { AlbumItem } from '../AlbumItem'
import * as S from './style'


// Create function to return all artists

function AlbumsContainer() {
    const { headerSearch } = useHeaderSearch()
    const [albums, setAlbums] = useState<IAlbum[]>([])
    const [token, setToken] = useState('')


    useEffect(() => {
        (async() => {
            
                const token = await getSpotifyToken()
                // adicionar event listener para mudar o token, adicionar o token no context
                setToken(token)
            
            
            const albums = await spotifyAPI.get(`/search?q=${headerSearch}&type=album&market=BR&offset=0&limit=10`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            setAlbums(albums.data.albums.items)

        })()
    },[headerSearch])
    
    return (
        <S.Container>
            <h3>Resultados encontrados para: “{headerSearch}”</h3>
            {
                albums.length === 0 &&
                <h1>Não foi possível encontrar resultados</h1> 
            }
            <S.AlbumsGrid>
                {
                    albums.map((album) => (
                        <AlbumItem id={album.id} name={album.name} albumImg={album.images[1].url} artists={album.artists[0].name} date={album.release_date}/>
                    ))
                }
            </S.AlbumsGrid>
        </S.Container>
    )
}
export { AlbumsContainer }
