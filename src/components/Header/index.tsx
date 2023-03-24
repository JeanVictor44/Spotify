import * as S from './style'
import logo from '../../assets/logo.svg'
import search from '../../assets/search.svg'
import settings from '../../assets/settings.svg'
import moon from '../../assets/moon.svg'
import profileImg from '../../assets/profile.svg'
import { useLocation } from 'react-router-dom'
import { useHeaderSearch } from '../../context/HeaderSearchContext'
import { Link } from 'react-router-dom'

function Header(){
    const { changeHeaderSearch } = useHeaderSearch()
    const location = useLocation()

    return (
        <S.Container>
            <div>
                <Link to='/'>

                    <img src={logo} />
                </Link>

            </div>
            {
                location.pathname === '/' ? (
                    <S.SearchContainer>
                        <S.SearchIcon>
                                <img src={search} alt="Icone de pesquisa"/>
                        </S.SearchIcon>                
                        <input type="text" placeholder='Search' onChange={changeHeaderSearch}/>
                    </S.SearchContainer>
                ) : location.pathname.match(/track/gi) ? (
                    <S.HeaderDescription>
                        <span>
                            Escutar faixa
                        </span>  
                    </S.HeaderDescription>
                        
                    ) 
                    : (<S.HeaderDescription>
                            <span>
                                Faixas do album
                            </span>  
                        </S.HeaderDescription>
                    )   
                
            }
            
            
        </S.Container>
    )
}

export { Header }