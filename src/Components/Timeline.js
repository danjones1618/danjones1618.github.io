import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./Timeline.css";

export function TimelineItem(props) {
  return (
    <div className="timeline-item-wrapper">
      <div className="timeline-item">
        {props.children}
        <span className="timeline-item-date">
          {props.date}
        </span>
      </div>
      <FontAwesomeIcon className="timeline-icon" icon={props.icon} listItem/>
    </div>
  );
}

export function Timeline(props) {
  return (
    <div className="timeline-wrapper">
      <div className="timeline-line"/>
      {props.children}
    </div>
  );
}
