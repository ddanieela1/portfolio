import './App.css';
import './Project.css'
import Homepage from './Homepage';
import About from './About';
import Blog from './Blog';
import Project from './Project';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

// new portfolio

function App() {
  return (
    <Router>
    <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <h1>
    <a class="navbar-brand" href="./">DV</a>
    </h1>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <h1>
          <a class="nav-link active" aria-current="page" href="./">Home</a>
          </h1>
        </li>
        <li class="nav-item">
          <h1>
          <a class="nav-link" href="./project">Projects</a>
          </h1>
        </li>
        <li class="nav-item">
          <h1>
          <a class="nav-link" href="./blog">Blog</a>
          </h1>
        </li>
        <li class="nav-item">
          <h1>
          <a class="nav-link" href="./about">About</a>
          </h1>
        </li>
      </ul>
    </div>
  </div>
</nav>
    <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/project" element={<Project />} />
      </Routes>
    </Router>
  );
}

export default App;
