import styled from "styled-components";

export const Container = styled.div `
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap:50px;
    margin:20px 
    
`

export const TracksList = styled.ul `   

    padding-right:20px;
    width: 100%;
    max-width: 800px;
    height:500px;
    overflow-y:scroll;
    list-style: none;
    
    li + li {
        margin-top: 14px;
    }
    li a{
        text-decoration: none;
        transition:.3s ;
        border-radius:5px ;
        cursor: pointer;
        padding:10px 0 10px 5px;
        display: flex;
        &:hover {
            background-color: #AC2B2E;
        }        
        .track-name {
            font-weight: bold;
        }
        .track-number{
            margin-right:10px;
            color: gray;
        }
        .track-duration {
            margin-left:auto;
            width: 70px;
            color: gray;
        }
        
    }
`