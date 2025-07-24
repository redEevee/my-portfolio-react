// src/components/Project.jsx
import React from "react";
import "../styles/index_style.css";

export default function Project() {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About me</a></li>
            <li><a href="/project">Project</a></li>
            <li><a href="https://github.com/redEevee" target="_blank" rel="noreferrer">Github</a></li>
          </ul>
        </nav>
      </header>

      <div className="pjma">
        <h1>project</h1>
        <ul>
          <li><a href="/">포트폴리오</a></li>
        </ul>
      </div>
    </div>
  );
}
