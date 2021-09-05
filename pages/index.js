import Head from 'next/head';
import Link from 'next/link';
import { getSortedProjectsData } from '../lib/projects';

export default function Home({ projects }) {
  return (
    <div className="container">
      <Head>
        <title>A website</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          Read{" "}
          <Link href="/posts/first-post">
            <a>this page!</a>
          </Link>
        </h1>

        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>

        <div className="grid">
          {projects.map(({ id, date, title }) => (
            <Link key={id} href={`/posts/${id}`}>
              <a className="card">
                <h3>{title}</h3>
                <p>{date}</p>
                <p>{id}</p>
              </a>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const projects = getSortedProjectsData();
  return {
    props: {
      projects
    }
  };
}
