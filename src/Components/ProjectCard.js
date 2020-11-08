import React from 'react';
import './ProjectCard.css';

export default (props) => {
  return (
    <div className="ProjectCard">
      {props.children}
    </div>
  );
}
