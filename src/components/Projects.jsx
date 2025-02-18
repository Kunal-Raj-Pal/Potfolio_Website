import React from 'react'
import food from "../assets/img/food.png"

function Projects() {
  return (
    <>
          {/* ---------------------------------------Projects Start--------------------------------------- */}
          <div className="projects">
        <div className="p-intro">
          <h1>My Projects</h1>
          <p>
            Explore my diverse web development projects, showcasing my skills in
            creating responsive, animated & user-friendly websites and web applications.
            From dynamic front-end designs to robust back-end solutions, each
            project reflects my commitment to clean code, intuitive interfaces,
            and performance optimization!
          </p>
        </div>

        <div className="project-card">
          <img src={food} alt="" />
          <h1>Restaurant Web</h1>
          <p>
            I have developed a fully responsive Restaurant Web App with Working
            Register and Login Feature!
          </p>
          <a href="https://kunal01.pythonanywhere.com/">Look Now →</a>
        </div>
      </div>
      {/* ---------------------------------------Projects End--------------------------------------- */}
<hr />
      <div className="last-h1">
        <h1>Have a project in mind?<br /> Let’s build something together!</h1>
        <button className="lb">
          <a href="/contact/">Contact</a>
        </button>
      </div>
    </>
  )
}

export default Projects