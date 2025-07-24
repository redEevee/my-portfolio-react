import React, { useEffect } from "react";
import Navbar from "./Navbar";
import "../styles/home_style.css";
import "../styles/home_time.css";
import "../scripts/home_time_text";


export default function Home() {
  useEffect(() => {}, []);

  return (
    <>
      <Navbar />
      <section className="main-content">
        {/* ...생략 */}
      </section>
    </>
  );
}
