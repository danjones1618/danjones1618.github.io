import fs from "fs";
import path from "path";
import matter from "gray-matter";
import remark from "remark";
import html from "remark-html";

const projectDir = path.join(process.cwd(), "projects");

const getIdFromFileName = (f: string) => f.replace(/\.mdx?$/, '');

export interface ProjectsFrontMatter {
  title: string,
  date: Date,
}

export function getSortedProjectsData() {
  const fileNames = fs.readdirSync(projectDir);
  const allProjectsData = fileNames.map((fname) => {
    const id = getIdFromFileName(fname);

    const fullPath = path.join(projectDir, fname);
    const contents = fs.readFileSync(fullPath, 'utf8');

    const matterResult = matter(contents);

    return {
      id,
      ...matterResult.data as ProjectsFrontMatter
    }
  });

  return allProjectsData.sort(({ date: a }, { date: b}) =>
    a < b
    ? 1
    : a > b
    ? -1
    : 0
  );
}

export interface Project extends ProjectsFrontMatter {
  id: string,
  contentHtml: string,
}

export async function getProject(id: string) : Promise<Project> {
  const fullPath = path.join(projectDir, `${id}.md`);
  const data = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(data);

  // Convert md to html
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();
  return {
    id,
    contentHtml,
    ...matterResult.data as ProjectsFrontMatter
  };
}

export function getAllProjectIds() {
  const fileNames = fs.readdirSync(projectDir);
  return fileNames.map(fileName => ({
    params: {
      id: getIdFromFileName(fileName),
    }
  }));
}
