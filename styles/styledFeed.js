import styled from "styled-components";

export const FeedContainer = styled.div`
    background: #f0f0f0;
    height: 100vh;
`;

export const FeedWrapper = styled.div`
    background: #fff;
    display: flex;
    max-width: 80%;
    height: 100%;
    margin: auto;
`;

export const FeedScroll = styled.div`
    margin: 0 auto;
    padding: 0 10px;
    max-width: 800px;
    width: 100%;
    background: #f0f0f0;
    height: 100%;
    overflow-y: scroll;
    scrollbar-width: none; /* Hides Scroll bar for IE and Edge */
    -ms-overflow-style: none; /* Hides Scroll bar for FireFox */

    &::-webkit-scrollbar {
        /* Hides Scroll bar for Chrome, Safari and Opera */
        display: none;
    }
`;