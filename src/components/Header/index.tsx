import * as S from './style'
import logo from '../../assets/logo.svg'
import search from '../../assets/search.svg'
import settings from '../../assets/settings.svg'
import moon from '../../assets/moon.svg'
import profileImg from '../../assets/profile.svg'
import { useLocation } from 'react-router-dom'

function Header(){
    const location = useLocation()
    return (
        <S.Container>
            <div>
                <img src={logo} />
            </div>
            {
                location.pathname === '/' ? (
                    <S.SearchContainer>
                        <S.SearchIcon>
                            <img src={search} alt="Icone de pesquisa"/>
                        </S.SearchIcon>                
                        <input type="text" placeholder='Search'/>
                    </S.SearchContainer>
                ) : (
                    <S.HeaderDescription>
                        <span>
                            Faixas do album
                        </span>  
                    </S.HeaderDescription>    
                )
                
            }
            
            <S.Actions>
                <button>
                    <img src={moon} alt="Ícone de troca de tema" />
                </button>
                <button>
                    <img src={settings} alt="Ícone de configurações"/>
                </button>
                
                <button className="profile-btn">
                    <span>Jean Victor</span>
                    <div>
                        <img src={profileImg} alt="Foto de Perfil"/>
                    </div>
                </button>
            </S.Actions>
        </S.Container>
    )
}

export { Header }