import styled from "styled-components";

export const Container = styled.div`
    h3 {
        font-size: 25px;
        font-weight: bold;
        margin: 30px 0;
    }

`

export const AlbumsGrid = styled.div `
display: grid;
grid-template-columns: repeat(10, 150px);
gap:25px
`