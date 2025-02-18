import React from "react";

import django from "../assets/img/django.png"
import github from "../assets/img/github.png"
import reacts from "../assets/img/react.png"
import css from "../assets/img/css.png"
import bootstrap from "../assets/img/bootstrap.png"
import ds from "../assets/img/ds.png"
import food from "../assets/img/food.png"
import gsaps from "../assets/img/gsaps.png"
import html from "../assets/img/html.png"
import insta from "../assets/img/insta.png"
import js from "../assets/img/js.png"
import laptop from "../assets/img/laptop.png"
import linkdin from "../assets/img/linkdin.png"
import note from "../assets/img/note.png"
import python from "../assets/img/python.png"
import sql from "../assets/img/sql.png"
import tailwind from "../assets/img/tailwind.png"

function About() {
  return (
    <>
      {/* ---------------------------------------About Start--------------------------------------- */}
      <div className="about">
        <h1>About</h1>
        <div className="abtcards">
          <div className="abtcards-top">
            <span id="abt-spn" className="d ">
              <img src={ds} alt="" />
              <div className="rght">
                <h1>Passionate Web Developer</h1>
                <p>
                  Welcome to my portfolio! I specialize in building dynamic,
                  animated websites with stunning UIs. Explore my live projects
                  to see how I combine cutting-edge technologies to bring ideas
                  to life with smooth animations and engaging design.
                </p>
              </div>
            </span>

            <span id="abt-spn2" className="d ">
              <img src={note} alt="" />
              <div className="rght">
                <h1>Problem Solver</h1>
                <p>
                  I enjoy tackling complex challenges and finding efficient
                  solutions. My approach to problem-solving is systematic and
                  logical.
                </p>
              </div>
            </span>
          </div>

          <div className="abtcards-botm">
            <span id="abt-spn3" className="d ">
              <img
                src={laptop}
                alt=""
              />
              <div className="rght ms-2">
                <h1>Diverse Expertise</h1>
                <p>
                  Experienced in crafting visually striking & animated,
                  high-functioning web apps optimized for all plateforms.
                </p>
              </div>
            </span>

            <span id="abt-spn4" className="d ">
              <img src={ds} alt="" />
              <div className="rght ms-2">
                <h1>Technical Skills</h1>
                  <p>
                    Expertise in Django, React, SQL, DRF, and GSAP, I create
                    seamless, interactive user experiences. Proficient in Django
                    for backend development, with experience in SQLite and
                    PostgreSQL database. Familiar with Git, GitHub, Vercel,project
                    management and deployment. Focused on creating engaging,
                    user-centered experiences.
                  </p>
              </div>
            </span>
          </div>
        </div>
      </div>
      {/* ---------------------------------------About End--------------------------------------- */}

      {/* ---------------------------------------Skills Start--------------------------------------- */}
      <div className="skills-main">
        <h1>My Skills</h1>
        <div className="skills">
          <div className="skills-logo">
            <div className="tech-logo django">
              <img
                src={django}
                alt=""
              />
            </div>
            <div className="tech-logo gsap ">
              <img
                src={reacts}
                alt=""
              />
            </div>
            <div className="tech-logo js">
              <img src={gsaps} alt="" />
            </div>
            <div className="tech-logo html">
              <img src={js} alt="" />
            </div>
            <div className="tech-logo css">
              <img src={css} alt="" />
            </div>
            <div className="tech-logo github">
              <img src={html} alt="" />
            </div>
            <div className="tech-logo sql">
              <img src={sql} alt="" />
            </div>
            <div className="tech-logo python">
              <img
                src={python}
                alt=""
              />
            </div>
            <div className="tech-logo tailwind">
              <img
                className="h-50"
                src={tailwind}
                alt=""
              />
            </div>
            <div className="tech-logo boots">
              <img
                className="h-50"
                src={bootstrap}
                alt=""
              />
            </div>
            <div className="tech-logo boots">
            <img className="h-50" src={github} alt=""/>
            </div>
          </div>
        </div>
        <div className="sml">
          <h1>Social Media</h1>
          <div className="links">
            <a href="">
              <img
                className="githubsm"
                src={github}
                alt=""
              />
            </a>
            <a href="">
              <img
                className="linkdin"
                src={linkdin}
                alt=""
              />
            </a>
            <a href="">
              <img
                className="insta"
                src={insta}
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
      {/* ---------------------------------------Skills End--------------------------------------- */}
    </>
  );
}

export default About;
