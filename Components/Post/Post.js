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

const Post = () => {
    return (
        <PostContrainer>

            <TopBox>
                <Image>Image</Image>
                <Title>Birmhdd Live - Sport</Title>
                <WifiIcon src="/images/wifi.png" alt="wi logo" />
            </TopBox>

            <BodyBox>
                <NewsTitle>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Alias voluptatibus libero tenetur aliquid voluptate itaque animi aliquam voluptas?
                    Voluptates saepe similique odio voluptas quia ad ab laboriosam nihil quod dolor.
                </NewsTitle>
                <DateStamp>TUESDAY, 26 DECEMBER 2020</DateStamp>
            </BodyBox>

            <KeyWordsBox>
                <KeyWordsBtn>Lorem</KeyWordsBtn>
                <KeyWordsBtn>ipsum</KeyWordsBtn>
            </KeyWordsBox>
            
        </PostContrainer>
    );
};

export default Post;
