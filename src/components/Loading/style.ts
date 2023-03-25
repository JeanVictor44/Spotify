import styled, {keyframes} from "styled-components";

const ldsFacebook = keyframes`
    0% {
      top: 8px;
      height: 64px;
    }
    50%, 100% {
      top: 24px;
      height: 32px;
    }
`
export const Container = styled.div `
    position: absolute;
    left: 0;
    top:0;
    background-color: rgba(0,0,0,0.2);
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .lds-facebook {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
    }
    .lds-facebook div {
    display: inline-block;
    position: absolute;
    left: 8px;
    width: 16px;
    background: #fff;
    animation: ${ldsFacebook} 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
    }
    .lds-facebook div:nth-child(1) {
    left: 8px;
    animation-delay: -0.24s;
    }
    .lds-facebook div:nth-child(2) {
    left: 32px;
    animation-delay: -0.12s;
    }
    .lds-facebook div:nth-child(3) {
    left: 56px;
    animation-delay: 0;
    }
        
`