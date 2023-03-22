import styled from "styled-components";

export const Container = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding:20px 40px;
`

export const HeaderDescription = styled.div `
    background-color: #AC2B2E;
    font-weight: bold;
    height:36px;
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 850px;
    width: 100%;
    border-radius: 10px;
    span {
        font-size: 18px;
    }
`
export const SearchContainer = styled.div `
    height:36px;
    width: 100%;
    max-width: 450px;
    position: relative;
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