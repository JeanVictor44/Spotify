import styled from "styled-components";

export const Container = styled.header`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding:20px 40px;
    @media (max-width:715px) {
        justify-content: center;

    }
`

export const HeaderDescription = styled.div `
    background-color: #AC2B2E;
    font-weight: bold;
    height:36px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 850px;
    border-radius: 10px;
    margin: 0 auto;
    margin-top: 20px;

    span {
        font-size: 18px;
    }
`
export const SearchContainer = styled.div `
    height:36px;
    width: 100%;
    max-width: 450px;
    position: relative;
    @media (max-width:715px) {
        margin-top: 20px;
        margin-right: 40px;
        
    }
    input {
        width:100%;
        height:100%;
        border-radius: 20px;
        border:none;
        outline: none;
        color:#000;
        padding-left: 40px;
        font-size: 16px;
    }
    margin: 0 auto;
`
export const SearchIcon = styled.div `
    position: absolute;
    top:50%;
    left: 10px;
    transform: translateY(-50%);
`
export const Actions = styled.div `
    display: flex;
    gap:30px;
    button {
        background-color: transparent;
        border: none;
        cursor: pointer;
    }
    button.profile-btn {
        display: flex;
        align-items: center;
        gap:5px;
        img {
            height:45px;
            width: 45px;
            border-radius: 50%;
        }
        span {
            font-weight: bold;
            font-size: 14px;
        }
    }
`