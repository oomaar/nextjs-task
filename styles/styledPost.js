import styled from "styled-components";

export const PostContrainer = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    max-width: 750px;
    width: 100%;
    background: #fff;
    margin: 20px auto;
    padding: 20px;
`;

export const TopBox = styled.div`
    display: flex;
    align-items: center;
`;

export const Image = styled.img`
    margin: 15px;
    height: 30px;
`;

export const Title = styled.h3`
    font-size: clamp(14px, 1vw, 19px);
`;

export const WifiIcon = styled.img`
    height: 30px;
    transform: rotate(45deg);
    margin: 0 0 0 auto;
`;

export const BodyBox = styled.div`
    margin: 0 0 10px;
`;

export const NewsTitle = styled.p`
    font-size: clamp(1rem, 1vw, 1.2rem);
`;

export const DateStamp = styled.p`
    font-size: 12px;
    color: #A0A0A0;
`;

export const KeyWordsBox = styled.div`
    border-top: 2px solid #A0A0A0;
    padding: 8px 0 0;
`;

export const KeyWordsBtn = styled.button`
    margin: 0 5px;
    border-radius: 35px;
    border: 2px solid #00a47c;
    color: #00a47c;
    background: transparent;
    outline: 0;
    padding: 8px;
    cursor: pointer;
`;
