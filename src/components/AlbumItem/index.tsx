import * as S from './style'

interface AlbumItemProps {
    name: string,
    albumImg: string,
    date: string,
    artists: string,
    id: string,
    size?: 'small' | 'medium' | 'big'
}

function AlbumItem({id,name, albumImg, date, artists, size = 'medium'}: AlbumItemProps){
    return (
        <S.Container to={`/album/${id}`}>
            
            <S.AlbumImage size={size}>
                <img src={albumImg} alt={`Capa do album ${name}`} />
            </S.AlbumImage>
            <h4>{name}</h4>
            <span>
                {date} • {artists} 
            </span>
        </S.Container>
    )
}
export { AlbumItem }