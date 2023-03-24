import styled from "styled-components";

export const Container = styled.div`
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
    
    & > div {
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
        p {
            max-width: 450px;
            margin: 0 auto;
        }
        a {
            padding: 20px;
        }
        audio {
            position: static;
            
        }
    }
`