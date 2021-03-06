import { Post } from "..";
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
                    <Post />
                </FeedScroll>
            </FeedWrapper>
        </FeedContainer>
    );
};

export default Feed;
