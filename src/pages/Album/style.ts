import styled from "styled-components";

export const Container = styled.div `
    display: flex;
    justify-content: center;
    gap:50px;
    
`

export const TracksList = styled.ul `
    width: 100%;
    max-width: 500px;
    height:500px;
    overflow-y:scroll;
    list-style: none;
    li + li {
        margin-top: 24px;
    }
    li {
        display: flex;
        
        .track-name {
            font-weight: bold;
        }
        .track-number{
            margin-right:10px;
            color: gray;
        }
        .track-duration {
            display: block;
            margin-left:auto;
            width: 80px;
            color: gray;
        }
        
    }
`