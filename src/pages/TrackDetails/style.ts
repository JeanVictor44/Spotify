import styled from "styled-components";


export const ContainerInfos = styled.div `
    .track-duration {
        font-weight: bold;
        margin-top: 10px;
    }
    .artist-img {
        width:40px ;
        height: 40px;
        border-radius: 50%;
    }
    > div {
        margin-top: 10px;
        display: flex;
        gap:20px;
        align-items: center;
        p {
            font-weight: bold;
        }
    }
    @media (max-width:950px) {
        > div {
            gap:5px;
            
        }
    }
 
`

export const Container = styled.div`
.link-return {
    display: flex;
    gap:10px
} 
.spotify-link{
    display: block;
    margin: 0 auto;
    text-decoration: none;
    font-weight: bold;
    width: 250px;
}
> div {
    display: flex;
    max-width: 1000px;
    padding: 20px;
    margin: 0 auto;
    gap:80px;
    
}
    
    h1 {
        margin-bottom: 15px;
    }
    
    .track-letter {
        height:500px;

        overflow-y:auto;
        padding-right: 20px;
    }
    p{
        line-height: 1.8;
        text-align: justify;
    }
    audio {
        left: 0;
        bottom: 0;
        position: absolute;
        width: 100%;
    }

    @media (max-width:950px) {
        >div {
            flex-direction: column;
            align-items: center;
            gap:10px;
        }
        h1{
            max-width: 450px;
            margin: 0 auto 15px 0 auto;
        }
        .track-letter {
            max-width: 450px;
            margin: 0 auto;
        }
       
        audio {
            position: static;
            
        }
    }
   
`