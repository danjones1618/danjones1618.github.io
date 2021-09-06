import { GetStaticProps, GetStaticPaths } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layouts/project';
import Date from '../../components/date';
import { getAllProjectIds, getProject } from '../../lib/projects';

export default function Project({ project }) {
  return (
    <Layout>
      <Head>
        <title>{project.title} - Dan Jones</title>
      </Head>
      <h1> {project.title}</h1>
      <p><Date dateString={project.date} /></p>
      <hr/>
      <div dangerouslySetInnerHTML={{ __html: project.contentHtml }} />
      <hr/>
      <Link href="/">
        <a>home</a>
      </Link>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const project = await getProject(params.id as string);
  return {
    props: {
      project,
    },
  };
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllProjectIds();
  return {
    paths,
    fallback: false,
  }
}
