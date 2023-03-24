import { AlbumSizes } from '../../constants/AlbumSizes'
import { formatTitleAlbum } from '../../utils/formatTitleAlbum'
import * as S from './style'

interface AlbumItemProps {
    name: string,
    albumImg: string,
    date: string,
    artists: string,
    id: string,
    size?: AlbumSizes
}

function AlbumItem({
    id,
    name , 
    albumImg , 
    date,
    artists,
    size = 'medium'
}: AlbumItemProps){
    return (
        <S.Container size={size} to={`/album/${id}`}>
            
            <S.AlbumImage size={size}>
                <img src={albumImg} alt={`Capa do album ${name}`} />
            </S.AlbumImage>
            <h4>{size == 'medium' ? formatTitleAlbum(name) : name}</h4>
            <span>
                {date.slice(0,4)} • {artists} 
            </span>
        </S.Container>
    )
}
export { AlbumItem }