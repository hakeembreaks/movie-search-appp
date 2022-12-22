import React from "react";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div
        className="img"
        style={{ background: "url(/img/hero.png) no-repeat" }}
      />
      <p className="img-text">Watch Something Incredible.</p>
    </section>
  );
}
