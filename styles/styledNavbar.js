import styled from "styled-components";

export const Nav = styled.nav`
    background-color: #00a47c;
    height: 80px;
    display: flex;
    align-items: center;

    @media screen and (max-width: 600px) {
        height: 60px;
    }
`;

export const SubContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 0 30px;

    @media screen and (max-width: 600px) {
        padding: 0 10px;
    }

    @media screen and (max-width: 400px) {
        padding: 4px;
    }
`;

export const LogoWrapper = styled.div`
    flex: 0.5;

    @media screen and (max-width: 1000px) {
        flex: 0.3;
    }
`;

export const Logo = styled.h1`
    color: #fff;
    font-size: clamp(16px, 4vw, 40px);
`;

export const ButtonsWrapper = styled.div`
    display: flex;
    flex: 0.5;
    align-items: center;

    @media screen and (max-width: 1000px) {
        display: none;
    }
`;

export const Button = styled.button`
    border-radius: 50px;
    width: 100px;
    height: 50px;
    outline: 0;
    border: 2px solid #fff;
    background-color: #fff;
    cursor: pointer;
    color: #00a47c;
    transition: all 0.4s ease-in-out;
    margin: auto;
    
    &.loginBtn {
        background: transparent;
        color: #fff;

        &:hover {
            background-color: #fff;
            color: #00a47c;
        }
    }

    &:hover {
        background-color: transparent;
        color: #fff;
    }
`;

export const InputWrapper = styled.div`
    display: none;
    flex: 0.4;
    align-items: center;
    height: 30px;
    margin: auto 0;
    background: #fff;
    border: 0;
    border-radius: 50px;
    padding: 10px;
    
    @media screen and (max-width: 1000px) {
        display: flex;
    }

    @media screen and (max-width: 600px) {
        flex: 0.2;
    }

    @media screen and (max-width: 400px) {
        padding: 4px;
    }
`;

export const SearchInput = styled.input`
    background: transparent;
    border: 0;
    outline: 0;

    @media screen and (max-width: 600px) {
        width: 150px;
    }

    @media screen and (max-width: 400px) {
        width: 140px;
    }
`;

export const IconWrapper = styled.div`
    display: none;
    flex: 0.3;
    justify-content: flex-end;
    align-items: center;

    @media screen and (max-width: 1000px) {
        display: flex;
    }
`;

export const Icon = styled.img`
    width: 30px;
    height: 30px;
    cursor: pointer;
    filter: invert(1);

    &.searchIcon {
        filter: invert(0);

        @media screen and (max-width: 400px) {
            width: 15px;
            height: 15px;
        }
    }

    @media screen and (max-width: 600px) {
        width: 20px;
        height: 20px;
    }
`;