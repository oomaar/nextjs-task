import {
    PostContrainer,
    TopBox,
    Image,
    Title,
    WifiIcon,
    BodyBox,
    NewsTitle,
    DateStamp,
    KeyWordsBox,
    KeyWordsBtn,
} from "../../styles/styledPost";

const Post = ({ posts }) => {
    const dataArray = posts.news;

    return (
        <>
            {dataArray.map(item => (
                <PostContrainer key={item._id}>
                    <TopBox>
                        <Image src={item.source.url} alt={item.source.title} />
                        <Title>{item.source.title}</Title>
                        <WifiIcon src="/images/wifi.png" alt="wi logo" />
                    </TopBox>
                    <BodyBox>
                        <NewsTitle>{item.title}</NewsTitle>
                        <DateStamp>{item.created_at}</DateStamp>
                    </BodyBox>
                    <KeyWordsBox>
                        {item.keywords.map(keyword => (
                            <KeyWordsBtn key={keyword._id}>{keyword.name}</KeyWordsBtn>
                        ))}
                    </KeyWordsBox>
                </PostContrainer>
            ))}
        </>
    );
};

export default Post;