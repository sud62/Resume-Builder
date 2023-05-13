import React from 'react';
import Home from "./Components/Home";
import Resume from "./Components/Resume";
import Education from "./Components/Education";
import Experience from './Components/Experience';
import Project from './Components/Project';
import Download from './Components/Download';
import {BrowserRouter, Routes, Route, Link, NavLink} from "react-router-dom";
import { Navbar } from 'react-bootstrap';

const App = () => {
  return (
    <div>
    <header>
    <h1>Resume Builder</h1>
    </header>
    <div className='container'>
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Home /> }/>
        <Route path = "/resume" element = {<Resume /> }/>
        <Route path = "/education" element = {<Education /> }/>
        <Route path = "/experience" element = {<Experience /> }/>
        <Route path = "/project" element = {<Project /> }/>
        <Route path = "/download" element = {<Download /> }/>
        <Route path = "/your-resume" element = {"src\Template\srt-resume.html"} />
      </Routes>
    </BrowserRouter>
    </div>
    <footer>
    <p>footer</p></footer>
    </div>
  )
}

export default App