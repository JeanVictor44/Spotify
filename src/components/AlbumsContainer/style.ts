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
    grid-template-columns: repeat(5, 0.5fr);
    gap:25px;

`