import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import {
  faEnvelope,
  faSquare,
  faUniversity,
  faSchool
} from '@fortawesome/free-solid-svg-icons'
import SideBar from './SideBar.js';
import Carosell from './Carosell.js';
import { Timeline, TimelineItem } from './Timeline.js';
import './App.css';

import road from './res/road.jpg';
import turbine from './res/windTurbine.jpg';

library.add(far, fab, faEnvelope, faSquare, faUniversity, faSchool);

function HomeSlide() {
  return (
    <Carosell id="Hero" slides={[
      {
        bg: road,
        text: ["Hi, I'm Dan", "A Computer Science student at the University of Bristol"]
      },
      {
        bg: turbine,
        text: ["CSS Webmaster", "I'm currently the webmaster for our subject's Society"],
      }
    ]}/>
  );
}

function TimeLineSection() {
  return (
    <section id="Time-Line-Section">
      <h3>The story so far..</h3>
      <Timeline>
        <TimelineItem icon={faEnvelope}>
          <h1>hello</h1>
        </TimelineItem>
        <TimelineItem icon={faEnvelope}>
          <h1>Wow</h1>
        </TimelineItem>
        <TimelineItem icon={faUniversity}>
          <h1>hello</h1>
        </TimelineItem>
        <TimelineItem icon={faSchool}>
          <h1>Wow</h1>
        </TimelineItem>
      </Timeline>
    </section>
  );
}

function App() {
  return (
    <>
      <SideBar/>
      <article id="Main-Content">
        <HomeSlide/>
        <TimeLineSection/>
      </article>
    </>
  );
}

export default App;
