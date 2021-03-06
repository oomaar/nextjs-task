import {
    FeedContainer,
    FeedWrapper,
    FeedScroll,
} from "../../styles/styledFeed";

const Feed = () => {
    return (
        <FeedContainer>
            <FeedWrapper>
                <FeedScroll>
                    <h1 style={{ margin: '0px' }}>Testing Feed Rpeat the h1 1000000 times</h1>
                </FeedScroll>
            </FeedWrapper>
        </FeedContainer>
    );
};

export default Feed;
