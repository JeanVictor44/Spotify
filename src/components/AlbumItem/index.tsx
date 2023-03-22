import * as S from './style'

interface AlbumItemProps {
    name: string,
    albumImg: string,
    date: string,
    singer: string
}
function AlbumItem({name, albumImg, date, singer}: AlbumItemProps){
    return (
        <S.Container>
            <S.AlbumImage>
                <img src={albumImg} alt={`Capa do album ${name}`} />
            </S.AlbumImage>
            <h4>{name}</h4>
            <span>
                {date} • {singer} 
            </span>
        </S.Container>
    )
}
export { AlbumItem }