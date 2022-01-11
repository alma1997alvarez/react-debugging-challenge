// @flow

import React, { useState } from 'react';
import './App.css';
import Grid from './listings/Grid';
import courses from '../data/courses.json';

const App = () => {
  const [userClicks, setUserClicks] = useState(0);

  const increaseUserClicks = () => {
    setUserClicks(prevUserClicks => ++prevUserClicks);
  }
    return (
      <div onClick={increaseUserClicks()}>
        <div className="navbar-fixed">
          <nav className="blue lighten-2">
            <div className="nav-wrapper">
              <a href="/" className="brand-logo center">Course list</a>
            </div>
          </nav>
        </div>
        <h2>User Clicks: {userClicks}</h2>
        <div>
            <Grid items={course}/>
        </div>
      </div>
    );
}

export default App;