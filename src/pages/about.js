import React from 'react';
import { Link } from 'gatsby';

export default function About() {
  return (
    <main>
      <h1>About me</h1>
      <p>Wow some text</p>
      <Link to="/">Go home</Link>
    </main>
  );
}
