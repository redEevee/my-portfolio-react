// src/components/Home.jsx
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import "../styles/home_style.css";
import "../styles/home_time.css";

export default function Home() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const year = now.getFullYear();
      const month = now.getMonth() + 1;
      const day = now.getDate();
      const hours = now.getHours();
      const minutes = now.getMinutes().toString().padStart(2, "0");
      const seconds = now.getSeconds().toString().padStart(2, "0");

      const timeString = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
      setTime(timeString);
    };

    updateClock();
    const intervalId = setInterval(updateClock, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <Navbar />
      <div className="page-container">
        <section className="main-content">
          <article className="profile">
            <div className="user-info">
              <p><i className="fa-solid fa-user" /> 이신원</p>
              <p><i className="fas fa-phone" /> 010-5125-1821</p>
              <p><i className="fas fa-cake-candles" /> 2000.10.08</p>
              <p><i className="fa-solid fa-envelope" /> aaaa182118@gmail.com</p>
            </div>
          </article>

          <article className="intro">
            <h3>안녕하세요</h3>
            <p>
              웹개발자를 준비중인 <br />
              군산대학교 컴퓨터정보공학과 <br />
              19학번 이신원입니다
            </p>
          </article>

          <article className="qualifications">
            <i className="fa-regular fa-id-card" />
            <h4>
              2017.12.15 피복아크용접기능사<br />
              2018.07.06 항공기체정비기능사<br />
              2020.11.13 자동차운전면허증<br />
              2024년 정보처리기사 취득준비
            </h4>
          </article>

          <article className="job-progress">
            <p><i className="fa-solid fa-user-tie" /> 현재 진행도</p>
            <p><i className="fa-brands fa-react" /> React: 50%</p>
            <p><i className="fa-solid fa-leaf" /> Spring: 30%</p>
          </article>

          <div style={{ marginTop: "20px" }}>{time}</div>
        </section>
      </div>
    </>
  );
}
