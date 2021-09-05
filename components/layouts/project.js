import styles from './project.module.scss';

export default function ProjectLayout({children}) {
  return <div className={styles.container}>{children}</div>;
}
