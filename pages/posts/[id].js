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

export async function getStaticProps({ params }) {
  const project = await getProject(params.id);
  return {
    props: {
      project,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllProjectIds();
  return {
    paths,
    fallback: false,
  }
}
