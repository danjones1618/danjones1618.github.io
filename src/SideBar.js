import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './SideBar.css';

function Header() {
  return (
    <header className="side-header">
      <div className="profile"/>
      <span className="name">Daniel Jones</span>
      <span className="job">Undergraduate Computer Scientist</span>
    </header>
  );
}

function IconLink(props) {
  return (
    <a className="icon-link" href={props.href}>
      <FontAwesomeIcon icon={props.icon} />
    </a>
  );
}

function Socials() {
  return (
    <div className="side-socials">
      <IconLink icon={['far', "envelope"]} href="mailto:hello@danjones.dev" />
      <IconLink icon={['fab', "linkedin"]} href="https://linkedin.com/in/danjones1618" />
      <IconLink icon={['fab', "github"]}   href="https://github.com/danjones1618" />
      <IconLink icon={['fab', "gitlab"]}   href="https://gitlab.com/danjones1618" />
    </div>
  );
}

function NavBar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/cv">CV</Link>
    </nav>
  );
}

export default function SideBar() {
  return (
    <div className="side-bar">
        <Header/>
        <NavBar/>
        <Socials/>
    </div>
  );
}
