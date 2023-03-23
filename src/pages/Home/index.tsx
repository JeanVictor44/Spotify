import * as S from "./style"
import play from '../../assets/play.svg'
import share from '../../assets/share.svg'
import gunsNRosesCover from '../../assets/guns-n-roses.svg'
import { AlbumsContainer } from "../../components/AlbumsContainer"

function Home(){
    return (
        <S.Container>
            <AlbumsContainer />
        </S.Container>
    )
}
export { Home }