import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    max-width: 900px;
    margin: 0 auto;
    gap:80px;
    
    & > div {
        height:500px;

        overflow-y:auto;
        padding-right: 15px;
    }
    p{
        line-height: 1.8;
        text-align: justify;
    }
    audio {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        
    }
`