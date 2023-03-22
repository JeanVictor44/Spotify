import styled from "styled-components";

export const Container = styled.div `
     margin:60px 0 0 40px;

`

export const BannerAlbum = styled.div `
    background-color: #AC2B2E;
    display: flex;
    max-width: 60%;
    justify-content: space-between;
    border-radius:20px ;
    
`

export const BannerContentLeft = styled.div `
    margin: 25px;
    h1 {
        font-size: 50px;
        max-width: 480px;
    }
    .banner-actions {
        display: flex;
        gap:10px;
        margin-top:40px;
    }
    button {
        display: flex;
        align-items: center;
        gap:14px;
        padding: 5px 20px;
        border: none;
        border-radius: 20px;
        span {
            color:#000;
            font-weight: 600;
        }
        cursor: pointer;
        
    }
    
`

export const BannerContentRight = styled.div `
   img {
    width: 350px;
    height: 100%;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
   }
`