import styled from "styled-components";

export const Container = styled.div `
    display: flex;
    justify-content: center;
    gap:100px;
    
`

export const TracksList = styled.ul `
    max-width: 800px;
    list-style: none;
    li + li {
        margin-top: 24px;
    }
    li {
        display: flex;
        justify-content: space-between;
        gap:50px;
    }
`