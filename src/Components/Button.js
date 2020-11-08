import React from 'react';
import './Button.css';

export default function Button(props) {
  return (
    <a {...props} className={`button ${props.className}`}>
      {props.children}
    </a>
  );
}
