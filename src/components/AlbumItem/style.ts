import { Link } from "react-router-dom";
import styled from "styled-components";
import { AlbumSizes, ALBUM_SIZES } from "../../constants/AlbumSizes";




interface ContainerProps {
    size: AlbumSizes
}

export const Container = styled(Link)<ContainerProps> `
text-decoration: none;
cursor: pointer;
    h4 {
        font-weight: bold;
        width: ${({size}) => ALBUM_SIZES[size]};
    }
    span {
        
        display: block;
        width: ${({size}) => ALBUM_SIZES[size]};

    }
`

interface IAlbumImage {
    size: AlbumSizes
}

export const AlbumImage = styled.div<IAlbumImage> `
    img {
        max-width: ${({size}) => ALBUM_SIZES[size]};
    }
`