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
export const AlbumImage = styled.div `
    img {
        max-width: 150px;
    }
`