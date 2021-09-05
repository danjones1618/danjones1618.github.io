import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import Layout from '../../components/layouts/project';

export default function Post() {
  return (
    <Layout>
      <Head>
        <title>My post</title>
      </Head>
      <h1>First</h1>
      <h2>
        <Link href="/">
          <a>Back home</a>
        </Link>
      </h2>
      <Image
        src="/images/profile_picture.jpg"
        height={144}
        width={144}
        alt="Dan Jones"
      />
    </Layout>
  );
}
