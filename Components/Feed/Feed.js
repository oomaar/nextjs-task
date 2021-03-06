import { Post } from "..";
import {
    FeedContainer,
    FeedWrapper,
    FeedScroll,
} from "../../styles/styledFeed";

const Feed = ({ posts }) => {
    return (
        <FeedContainer>
            <FeedWrapper>
                <FeedScroll>
                    <Post posts={posts} />
                </FeedScroll>
            </FeedWrapper>
        </FeedContainer>
    );
};

export default Feed;
