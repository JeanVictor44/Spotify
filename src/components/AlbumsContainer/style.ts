import styled from "styled-components";

export const Container = styled.div`
    margin: 0 auto;
    h3 {
        font-size: 25px;
        font-weight: bold;
        margin: 30px 0;
    }

`

export const AlbumsGrid = styled.div `
    
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap:25px;
    @media (max-width:1000px) {
        grid-template-columns: repeat(3, 1fr);

    }
    @media (max-width:650px) {
        grid-template-columns: repeat(2, 1fr);

    }
    @media (max-width:580px) {
        grid-template-columns: repeat(1, 1fr);
        a {
            margin: 0 auto;
        
        }

    }
`