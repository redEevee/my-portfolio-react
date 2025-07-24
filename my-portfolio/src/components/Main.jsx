// src/components/Main.jsx
import React, { useEffect } from "react";
import "../styles/home_style.css";
import "../scripts/index_ef.js";

export default function Main() {
  useEffect(() => {
    // index_ef.js는 opacity 애니메이션만 담당하므로 별도 로직 없음
  }, []);

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

      <div className="box" id="center">
        <h1>portfolio</h1>
        <p>추가해나가는 포트폴리오</p>
      </div>
    </div>
  );
}
