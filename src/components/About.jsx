import React from "react";

function About() {
  return (
    <>
      {/* ---------------------------------------About Start--------------------------------------- */}
      <div className="about">
        <h1>About</h1>
        <div className="abtcards">
          <div className="abtcards-top">
            <span id="abt-spn" className="d ">
              <img src={"https://portfolio-api-wnrc.onrender.com/media/images/ds.png"} alt="" />
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
              <img src={"https://portfolio-api-wnrc.onrender.com/media/images/note.png"} alt="" />
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
                src={"https://portfolio-api-wnrc.onrender.com/media/images/laptop.png"}
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
              <img src={"https://portfolio-api-wnrc.onrender.com/media/images/ds.png"} alt="" />
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
                src={"https://portfolio-api-wnrc.onrender.com/media/images/django.png"}
                alt=""
              />
            </div>
            <div className="tech-logo gsap ">
              <img
                src={"https://portfolio-api-wnrc.onrender.com/media/images/react.png"}
                alt=""
              />
            </div>
            <div className="tech-logo js">
              <img src={"https://portfolio-api-wnrc.onrender.com/media/images/gsap.png"} alt="" />
            </div>
            <div className="tech-logo html">
              <img src={"https://portfolio-api-wnrc.onrender.com/media/images/js.png"} alt="" />
            </div>
            <div className="tech-logo css">
              <img src={"https://portfolio-api-wnrc.onrender.com/media/images/css.png"} alt="" />
            </div>
            <div className="tech-logo github">
              <img src={"https://portfolio-api-wnrc.onrender.com/media/images/html.png"} alt="" />
            </div>
            <div className="tech-logo sql">
              <img src={"https://portfolio-api-wnrc.onrender.com/media/images/sql.png"} alt="" />
            </div>
            <div className="tech-logo python">
              <img
                src={"https://portfolio-api-wnrc.onrender.com/media/images/python.png"}
                alt=""
              />
            </div>
            <div className="tech-logo tailwind">
              <img
                className="h-50"
                src={"https://portfolio-api-wnrc.onrender.com/media/images/tailwind.png"}
                alt=""
              />
            </div>
            <div className="tech-logo boots">
              <img
                className="h-50"
                src={"https://portfolio-api-wnrc.onrender.com/media/images/bootstrap.png"}
                alt=""
              />
            </div>
            <div className="tech-logo boots">
            <img className="h-50" src={'https://portfolio-api-wnrc.onrender.com/media/images/github.png'} alt=""/>
            </div>
          </div>
        </div>
        <div className="sml">
          <h1>Social Media</h1>
          <div className="links">
            <a href="">
              <img
                className="githubsm"
                src={"https://portfolio-api-wnrc.onrender.com/media/images/github.png"}
                alt=""
              />
            </a>
            <a href="">
              <img
                className="linkdin"
                src={"https://portfolio-api-wnrc.onrender.com/media/images/linkdin.png"}
                alt=""
              />
            </a>
            <a href="">
              <img
                className="insta"
                src={"https://portfolio-api-wnrc.onrender.com/media/images/insta.png"}
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
