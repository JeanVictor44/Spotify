import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled(Link) `
text-decoration: none;
cursor: pointer;
    h4 {
        font-weight: bold;
    }
    span {
        margin-top:8px;
    }
`

interface IAlbumImage {
    size: 'small' | 'medium' | 'big'
}
export const AlbumImage = styled.div<IAlbumImage> `
    img {
        max-width: ${({size}) => size === 'small' ? '60px' : size == 'medium' ? '150px' : '350px'};
    }
`