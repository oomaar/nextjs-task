import Head from 'next/head';
import { Feed } from '../Components';

export default function Home({ posts }) {
  // console.log("🚀 ~ file: index.js ~ line 5 ~ Home ~ posts", posts.totalNews)
  const total = posts.totalNews;

  return (
    <div>
      <Head>
        <title>News Buzz</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Feed posts={posts} />
    </div>
  )
}

export const getServerSideProps = async () => {
  const res = await fetch(`http://80.240.21.204:1337/news?skip=0&limit=3000`);
  const posts = await res.json();

  return {
      props: {
          posts
      }
  }
}