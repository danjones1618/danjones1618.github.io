import React from 'react';
import { graphql } from 'gatsby';

const ProjectsPage = ({ data }) => {
  return (
    <main>
      <h1>Projects</h1>
      <ul>
        { data.allFile.nodes.map(node => (
          <li key={node.name}>
            {node.name}
          </li>
        ))}
      </ul>
    </main>
  );
}

export const query = graphql`
  query {
    allFile(filter: {sourceInstanceName: {eq: "projects"}}) {
      nodes {
        name
      }
    }
  }
`;

export default ProjectsPage;
