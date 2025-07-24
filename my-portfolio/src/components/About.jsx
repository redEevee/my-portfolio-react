// src/components/About.jsx
import React from "react";
import Navbar from "./Navbar";
import "../styles/home_style.css"; // 여기에 .page-container 정의돼 있어야 함

export default function About() {
  return (
    <>
      <Navbar />
      <div className="page-container">
        <section className="main-content">
          <h1 style={{ textAlign: "center" }}>About Me</h1>
          <p style={{ textAlign: "center" }}>
            안녕하세요, 프론트엔드 개발자를 준비 중인 이신원입니다.
            <br />
            군산대학교 컴퓨터정보공학과 19학번이며, 다양한 기술을 익히며 포트폴리오를 쌓고 있습니다.
          </p>

          <div className="qualifications">
            <h3>자격증</h3>
            <ul>
              <li>2017.12.15 피복아크용접기능사</li>
              <li>2018.07.06 항공기체정비기능사</li>
              <li>2020.11.13 자동차운전면허증</li>
              <li>2024년 정보처리기사 취득 준비 중</li>
            </ul>
          </div>

          <div className="job-progress">
            <h3>학습 진행도</h3>
            <p>React: 50%</p>
            <p>Spring: 30%</p>
          </div>
        </section>
      </div>
    </>
  );
}
