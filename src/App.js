import React, { useState } from 'react';
import useAckee from 'use-ackee';
import { Route, Switch, Redirect, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import {
  faEnvelope,
  faSquare,
  faUniversity,
  faSchool,
  faNewspaper,
  faIdBadge,
  faArrowLeft,
  faEgg,
  faPlus,
  faChalkboardTeacher,
  faRocket,
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import Home from './Pages/home.js';
import CVPage from './Pages/CV.js';
import SideBar from './SideBar.js';
import './App.css';

library.add(far, fab, faEnvelope, faSquare, faUniversity, faSchool,
  faNewspaper, faIdBadge, faArrowLeft, faEgg, faPlus, faChalkboardTeacher,
  faRocket, faChevronLeft, faChevronRight);

function SkillsHighlight() {
  return (
    <section id="Skills-Highlight">
      <h3></h3>
    </section>
  );
}

function App() {
  const [navOpen, setNav] = useState(true);
  const location = useLocation();
  useAckee(location.pathname, {
    server: 'https://ackee.icedcoffee.dev',
    domainId: 'e7e64cd0-494a-42a9-9e1c-c6ec03d11f81',
  }, {
    ignoreLocalhost: true,
  });

  return (
    <div id="Main" className={navOpen ? "" : "hide-nav"}>
      <FontAwesomeIcon id="menu-btn" icon={faArrowLeft} onClick={() => setNav(!navOpen)}/>
      <SideBar/>
      <article id="Main-Content">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/cv">
            <CVPage />
          </Route>
          <Route exact path="/404">
            <h1>Error 404 - page not found</h1>
          </Route>
          <Route path="*">
            <Redirect to="/404" />
          </Route>
        </Switch>
      </article>
    </div>
  );
}
export default App;
