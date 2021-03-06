import Head from 'next/head';
import { Feed } from '../Components';

export default function Home() {
  return (
    <div>
      <Head>
        <title>News Buzz</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Feed />
      {/* right setion blank */}
      {/* feed section (Scroll) */}
      {/* left setion blank */}
    </div>
  )
}
