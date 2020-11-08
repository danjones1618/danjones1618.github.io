import React from 'react';
import {
  faUniversity,
  faSchool,
  faNewspaper,
  faIdBadge,
  faEgg,
  faPlus,
  faChalkboardTeacher,
  faRocket,
} from '@fortawesome/free-solid-svg-icons';
import Carosell from '../Components/Carosell.js';
import { Timeline, TimelineItem } from '../Components/Timeline.js';
//import Project from './Components/ProjectCard.js';
import road from '../res/road.jpg';
import turbine from '../res/windTurbine.jpg';


function HomeSlide() {
  return (
    <Carosell
      id="Hero"
      slides={[
        {
          bg: road,
          text: ["Hi, I'm Dan", "A Computer Science student at the University of Bristol"]
        },
        {
          bg: turbine,
          text: ["CSS Webmaster", "I'm currently the webmaster for our subject's Society"],
        },
      ]}
    />
  );
}

function TimeLineSection() {
  return (
    <section id="Time-Line-Section">
      <h3>The story so far...</h3>
      <Timeline>
        <TimelineItem icon={faChalkboardTeacher} date="01/10/2020 - present">
          <h4>Assistant Teacher</h4>
          <p>Running seminars and helping students in lab sessions along side my third-year studies</p>
          <p>I am assistant teacher in the following courses:</p>
          <ul>
            <li>Year 2 seminars</li>
            <li><code>COMS20006</code> Software Product Engineering</li>
            <li><code>COMS10012</code> Software Tools</li>
            <li><code>COMSM0085</code> Overview of Software tools (masters conversion unit)</li>
            <li><code>COMS10017</code> Object-Oriented Programming and Algorithms 1</li>
          </ul>
        </TimelineItem>
        <TimelineItem icon={faRocket} date="06/08/2020 - 02/10/2020">
          <h4>Web Developer @ spin-up.science</h4>
          <p>Worked on the MVP of <a href="https://protolyst.org">protolyst</a>, a learning platform and ideation tool set centred around early stage start up market research and planning.</p>
        </TimelineItem>
        <TimelineItem icon={["fab", "css3-alt"]} date="03/05/2020">
          <h4>CSS Webmaster</h4>
          <p>I was re-elected as the webmaster for the Computer Science Society</p>
        </TimelineItem>
        <TimelineItem icon={faPlus} date="28/04/2020">
          <h4>Bristol PLUS Award</h4>
          <p>Achieved for demonstrating gained employability skills and taking part in extra-curricular activities to help prepare me for my future career.</p>
          <a href="https://bristol.ac.uk/careers/bristol-plus-award/">Find out more</a>
        </TimelineItem>
        <TimelineItem icon={faChalkboardTeacher} date="24/01/2020 - 30/06/2020">
          <h4>Algorithms TA</h4>
          <p>In the second semester of my second year, I was a teaching assistant for the first year Algorithms module</p>
        </TimelineItem>
        <TimelineItem icon={faEgg} date="22/11/2019">
          <h4>2019 CSS GameJam</h4>
          <p>In a team of 4 created a HTML5 game called <em>"Mumma's Eggaria"</em> and came 2nd place!</p>
          <p>The game is inspired by the Papa's flash game saga. In this game you are a chef in an Egg Cafe and have to prepare various egg-based dishes</p>
          <a href="https://danjones.dev/mummas-eggaria">Play it here</a>
        </TimelineItem>
        <TimelineItem icon={["fab", "css3-alt"]} date="03/05/2019">
          <h4>CSS Webmaster</h4>
          <p>Webmaster for the CS society in my 2nd year of university.</p>
          <ul>
            <li>Rebuilt and designed the <a href="https://cssbristol.co.uk/events">events page</a></li>
            <li>Rebuilt and designed the <a href="https://cssbristol.co.uk/tutorials">tutorials page</a></li>
            <li>Rebuilt and designed the <a href="https://cssbristol.co.uk/">home page content</a></li>
            <li>Implemented generation of an ICalander file of events</li>
            <li>Kept events and job postings up to date</li>
            <li>Continued with various Press officer responsibilities: making banners, and advertising</li>
          </ul>
        </TimelineItem>
        <TimelineItem icon={faIdBadge} date="24/06/2019 - 14/09/2019">
          <h4>Internship @ BAE Systems AI</h4>
          <p>Summer internship between years 1 and 2 as an <em>Operational Cyber Software Engineer</em></p>
          <p>Notable achievements:</p>
          <ul>
            <li>Working as a team to produces a business pitch to solve IoT security</li>
            <li>Apart of the winning team in the CTF</li>
            <li>Delivering a project involving python, and gstreamer</li>
          </ul>
        </TimelineItem>
        <TimelineItem icon={faNewspaper} date="16/11/2018">
          <h4>Press Officer at CSS</h4>
          <p>I became the press officer in my first year of university with responsibilities including:</p>
          <ul>
            <li>Creating newsletters</li>
            <li>Creating event banners</li>
            <li>Generally helping out</li>
          </ul>
        </TimelineItem>
        <TimelineItem icon={faUniversity} date="24/09/2018">
          <h4>Started University</h4>
          <p>Studying MEng Computer Science at the University of Bristol</p>
        </TimelineItem>
        <TimelineItem icon={faSchool} date="August 2018">
          <h4>Left the Willink School</h4>
          <p>A-Levels achieved:</p>
          <ul>
            <li>A* Computer science</li>
            <li>A* Mathematics</li>
            <li>A  Further Maths</li>
            <li>B  Physics</li>
          </ul>
          <p>Achieved 14 GCSEs including A* Maths and A English</p>
        </TimelineItem>
      </Timeline>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <HomeSlide/>
      {/*<Project name="LiDAR" langages={["react.js", "spring boot", "agile", "python", "flask"]}/>*/}
      <TimeLineSection/>
    </>
  );
}
