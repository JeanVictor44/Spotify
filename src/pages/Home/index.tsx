import { fetcherAlbums} from '../../api/spotify'
import { useHeaderSearch } from '../../context/HeaderSearchContext'
import { AlbumItem } from '../../components/AlbumItem'
import * as S from './style'
import useSWR from 'swr' 
import { Loading } from '../../components/Loading'

function AlbumsSearch() {
    const { headerSearch } = useHeaderSearch()
    const {data, isLoading } = useSWR(`/search?q=${headerSearch}&type=album&market=BR&offset=0&limit=10`, fetcherAlbums)
    
    if(isLoading){
        return <Loading /> 
    }

    return (
        <S.Container>
            <h3>Resultados encontrados para: “{headerSearch}”</h3>
            {
                data?.length === 0 &&
                <h1>Não foi possível encontrar resultados</h1> 
            }
            <S.AlbumsGrid>
                {
                    data?.map((album) => (
                        <AlbumItem
                            key={album.id} 
                            id={album.id} 
                            name={album.name} 
                            albumImg={album.images[1].url} 
                            artists={album.artists[0].name} 
                            date={album.release_date}
                        />
                    ))
                }
            </S.AlbumsGrid>
        </S.Container>
    )
}
export { AlbumsSearch }
