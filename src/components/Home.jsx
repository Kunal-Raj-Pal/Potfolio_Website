import React, { useEffect, useState } from "react";
import "../assets/css/style.css";
import "../assets/css/bootstrap.css";
import axios from "axios";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

function Home() {
  

       // --------------------GSAP Animation Start----------------------------
       useGSAP(() => {
        var mm = gsap.matchMedia();
    
        gsap.registerPlugin(useGSAP);
        gsap.registerPlugin(ScrollTrigger);
    
        mm.add("(min-width:800px)", () => {
          // -------------------------------Home Start--------------------
    
          var atl = gsap.timeline();
    
          atl.to(".circle", {
            position: "relative",
            rotate: 90,
            x: "10vh",
            backgroundColor: "#F5F7F9",
            delay: 0.5,
            borderRadius: "1vh",
          });
    
          var btl = gsap.timeline();
          btl.to(".circle", {
            x: "25vh",
            backgroundColor: "#F5F7F9",
            delay: 1,
          });
    
          var ctl = gsap.timeline();
          ctl.to(".circle", {
            rotate: 180,
            x: "38vh",
            backgroundColor: "#F5F7F9",
            delay: 1.5,
            borderRadius: "2vh",
          });
          var dtl = gsap.timeline();
          dtl.to(".circle", {
            y: "12vh",
            backgroundColor: "#F5F7F9",
            delay: 2,
          });
          var etl = gsap.timeline();
          etl.to(".circle", {
            rotate: 270,
            x: "52vh",
            backgroundColor: "#F5F7F9",
            delay: 2.5,
            borderRadius: "3vh",
          });
          var ftl = gsap.timeline();
          ftl.to(".circle", {
            borderRadius: "50%",
            y: "100vh",
            backgroundColor: "#F5F7F9",
            delay: 3,
            opacity: 0,
          });

          var bodytl = gsap.timeline();
          bodytl.from(".home,#nav,.about,.skills-main,.projects,.last-h1,hr", {
            backgroundColor: "red",
            delay: 3.5,
          });
    
          var ntl = gsap.timeline();
          ntl.to("#navname", {
            color: "skyblue",
            delay: 4,
          });
    

          var homeptl = gsap.timeline();
          homeptl.from("#homep", {
            stagger: 2,
            opacity: 0,
            duration: 5,
            delay: 4,
          });
    
          gsap.from("#django", {
            y: -200,
            opacity: 0,
            rotate: -360,
            duration: 0.9,
          });
    
          gsap.from("#gsap", {
            y: 200,
            opacity: 0,
            rotate: -360,
            duration: 0.9,
          });
          gsap.from("#js", {
            y: -200,
            opacity: 0,
            rotate: 360,
            duration: 0.9,
          });
          gsap.from("#html", {
            y: 200,
            opacity: 0,
            rotate: -360,
            duration: 0.9,
          });
          gsap.from("#css", {
            y: -200,
            opacity: 0,
            rotate: 360,
            duration: 0.9,
          });
          gsap.from("#github", {
            y: 200,
            opacity: 0,
            rotate: -360,
            duration: 0.9,
          });
    
          var navtl = gsap.timeline();
          navtl.from("#nav #navname,#nav li", {
            opacity: 0,
            stagger: 0.6,
          });
          var navtl = gsap.timeline();
          navtl.from(".name", {
            color: "white",
            delay: 4.1,
          });
    
          // -------------------------------Home End--------------------
    
          var abttl = gsap.timeline({
            scrollTrigger: {
              trigger: ".abtcards",
              start: "top 50%",
              end: "top 50%",
              scrub: 2,
              // markers: true,
            },
          });
    
          abttl.to(
            "#abt-spn",
            {
              y: 10,
              rotate: 2.5,
            },
            "a"
          );
    
          abttl.to(
            "#abt-spn2",
            {
              y: 15,
              rotate: -6.2,
            },
            "a"
          );
    
          // ----------------------Skills start---------------------
    
          var skltl = gsap.timeline({
            scrollTrigger: {
              trigger: ".skills",
              start: "top 50%",
              end: "top 50%",
              scrub: 2,
              // markers: true,
            },
          });
    
          skltl.from(
            ".django, .gsap, .github, .sql",
            {
              x: 200,
              rotate: 15,
              opacity: 0,
            },
            "a"
          );
    
          skltl.from(
            ".html, .css, .boots, .tailwind",
            {
              x: -200,
              rotate: -15,
              opacity: 0,
            },
            "a"
          );
    
          skltl.from(
            ".js",
            {
              x: -200,
              rotate: -15,
              opacity: 0,
            },
            "a"
          );
          skltl.from(
            ".python",
            {
              x: 200,
              rotate: 15,
              opacity: 0,
            },
            "a"
          );
          // ----------------------Skills End---------------------
    
          // ----------------------Social Start---------------------
          var smtl = gsap.timeline({
            scrollTrigger: {
              trigger: ".skills-main",
              start: "top -15%",
              end: "top -15%",
              scrub: 2,
              // markers: true,
            },
          });
    
          smtl.from(
            ".githubsm",
            {
              x: -200,
              opacity: 0,
            },
            "sm"
          );
          smtl.from(
            ".linkdin",
            {
              y: -200,
              opacity: 0,
            },
            "sm"
          );
          smtl.from(
            ".insta",
            {
              x: 200,
              opacity: 0,
            },
            "sm"
          );
          // ----------------------Social End---------------------
    
          // ----------------------Project Start---------------------
    
          gsap.from(".projects p,.projects h1,.projects img", {
            stagger: 0.5,
            opacity: 0,
            scrollTrigger: {
              trigger: ".projects",
              start: "top 50%",
              end: "top 50%",
              scrub: 2,
              // markers: true,
            },
          });
    
          gsap.from(".projects img", {
            x: -320,
            rotate: -15,
            scrollTrigger: {
              trigger: ".projects p",
              start: "top 50%",
              end: "top 50%",
              scrub: 2,
              // markers: true,
            },
          });
          // ----------------------Project End---------------------
    
          // ----------------------Last h1 Start---------------------
    
          gsap.from(".last-h1 h1", {
            opacity: 0,
            stagger: 1,
            scrollTrigger: {
              trigger: ".projects img",
              start: "top 40%",
              end: "top 40%",
              scrub: 2,
              // markers: true,
            },
          });
    
          gsap.from(".last-h1 .lb", {
            opacity: 0,
            x: 200,
            scrollTrigger: {
              trigger: ".projects img",
              start: "top 28%",
              end: "top 27%",
              scrub: 2,
              // markers: true,
            },
          });
          // ----------------------Last h1 End---------------------
        });
    
        // --------------!!!!!!!!!!!!!!!!!!!!!!!!!!!!-R-GSAP Start-!!!!!!!!!!!!!!!!!!!!!!!!!!!!------------------------------
        mm.add("(max-width:799px)", () => {
          //----------------------------------------R-Home Start----------------------------
          var atl = gsap.timeline();
          atl.to(".circle", {
            position: "relative",
            rotate: 90,
            x: "5vh",
            backgroundColor: "#F5F7F9",
            delay: 0.5,
            borderRadius: ".5vh",
          });
    
          var btl = gsap.timeline();
          btl.to(".circle", {
            x: "12vh",
            backgroundColor: "#F5F7F9",
            delay: 1.5,
          });
    
          var ctl = gsap.timeline();
          ctl.to(".circle", {
            rotate: 180,
            x: "16.5vh",
            backgroundColor: "#F5F7F9",
            delay: 2,
            borderRadius: "1vh",
          });
          var dtl = gsap.timeline();
          dtl.to(".circle", {
            y: "5vh",
            backgroundColor: "#F5F7F9",
            delay: 2.5,
          });
          var etl = gsap.timeline();
          etl.to(".circle", {
            rotate: 270,
            x: "20vh",
            backgroundColor: "#F5F7F9",
            delay: 3,
            borderRadius: "1.2vh",
          });
          var ftl = gsap.timeline();
          ftl.to(".circle", {
            borderRadius: "50%",
            y: "200vh",
            backgroundColor: "#F5F7F9",
            delay: 3.5,
            opacity: 0,
          });
          var bodytl = gsap.timeline();
          bodytl.from("html,body", {
            backgroundColor: "red",
            delay: 4,
          });
    
          var homeptl = gsap.timeline();
          homeptl.from("#homep", {
            stagger: 2,
            opacity: 0,
            duration: 3,
            delay: 4,
          });
    
          var handtl = gsap.timeline({
            scrollTrigger: {
              trigger: ".home",
              start: "top 6%",
              end: "top 6%",
              scrub: 2,
              // markers: true,
            },
          });
    
          var handtl = gsap.timeline({
            scrollTrigger: {
              trigger: ".home",
              start: "top 6%",
              end: "top 6%",
              scrub: 2,
              // markers: true,
            },
          });
    
          gsap.from("#django", {
            x: -200,
            opacity: 0,
            rotate: -360,
            duration: 0.9,
          });
    
          gsap.from("#gsap", {
            x: -200,
            opacity: 0,
            rotate: -360,
            duration: 0.9,
          });
          gsap.from("#js", {
            x: 200,
            opacity: 0,
            rotate: 360,
            duration: 0.9,
          });
          gsap.from("#html", {
            x: -200,
            opacity: 0,
            rotate: -360,
            duration: 0.9,
          });
          gsap.from("#css", {
            x: 200,
            opacity: 0,
            rotate: 360,
            duration: 0.9,
          });
          gsap.from("#github", {
            x: 200,
            opacity: 0,
            rotate: -360,
            duration: 0.9,
          });
    
          var navtl = gsap.timeline();
          navtl.from("#nav li", {
            opacity: 0,
            stagger: 0.6,
          });
    
          var navtl = gsap.timeline();
          navtl.from(".name", {
            color: "white",
            delay: 4.1,
          });
          var navtl = gsap.timeline();
          navtl.from("#contact-btn", {
            color: "white",
            delay: 4.1,
          });
    
          var navtll = gsap.timeline();
          navtll.from(".hero-h1 span", {
            opacity: 0,
            stagger: 0.6,
          });
          //----------------------------------------R-Home End------------------------------
    
          //----------------------------------------R-About Start------------------------------
          gsap.from("#abt-spn", {
            position: "relative",
            top: 20,
            left: 200,
            rotate: 15,
            opacity: 0,
            scrollTrigger: {
              trigger: ".about",
              start: "top 50%",
              end: "top 50%",
              scrub: 2,
              // markers: true,
            },
          });
    
          gsap.from("#abt-spn2", {
            position: "relative",
            top: 20,
            left: -200,
            rotate: 15,
            opacity: 0,
            scrollTrigger: {
              trigger: "#abt-spn",
              start: "top 10%",
              end: "top 10%",
              scrub: 2,
              // markers: true,
            },
          });
    
          gsap.from("#abt-spn3", {
            position: "relative",
            top: 20,
            left: 200,
            rotate: 15,
            opacity: 0,
            scrollTrigger: {
              trigger: "#abt-spn2",
              start: "top 10%",
              end: "top 10%",
              scrub: 2,
              // markers: true,
            },
          });
    
          gsap.from("#abt-spn4", {
            position: "relative",
            top: 20,
            left: -200,
            rotate: 15,
            opacity: 0,
            scrollTrigger: {
              trigger: "#abt-spn3 ",
              start: "top 10%",
              end: "top 10%",
              scrub: 2,
              // markers: true,
            },
          });
          //----------------------------------------R-About End----------------------------
    
          // -----------------------------------------R-SKills Start---------------------------------
          var skltl = gsap.timeline({
            scrollTrigger: {
              trigger: ".skills",
              start: "top 60%",
              end: "top 50%",
              scrub: 2,
              // markers: true,
            },
          });
    
          skltl.from(
            ".django, .html, .sql, .boots",
            {
              left: -200,
              position: "relative",
              rotate: -30,
              opacity: 0,
            },
            "a"
          );
    
          skltl.from(
            ".js, .github, .tailwind",
            {
              left: 200,
              position: "relative",
              rotate: 30,
              opacity: 0,
            },
            "a"
          );
    
          skltl.from(
            ".gsap",
            {
              y: -200,
              rotate: 30,
              opacity: 0,
            },
            "a"
          );
          skltl.from(
            ".python",
            {
              y: 200,
              rotate: -30,
              opacity: 0,
            },
            "a"
          );
          skltl.from(
            ".css",
            {
              rotate: -30,
              opacity: 0,
            },
            "a"
          );
          // -----------------------------------------R-SKills End---------------------------------
    
          // -----------------------------------------R-Social Start---------------------
          var smtl = gsap.timeline({
            scrollTrigger: {
              trigger: ".sml",
              start: "top 70%",
              end: "top 70%",
              scrub: 2,
              // markers: true,
            },
          });
    
          smtl.from(
            ".githubsm",
            {
              x: -200,
              opacity: 0,
            },
            "sm"
          );
          smtl.from(
            ".linkdin",
            {
              y: -200,
              opacity: 0,
            },
            "sm"
          );
          smtl.from(
            ".insta",
            {
              x: 200,
              opacity: 0,
            },
            "sm"
          );
          // -----------------------------------------R-Social End---------------------------------
    
          // -----------------------------------------R-Project Start---------------------------------
          gsap.from(".projects h1, .projects p", {
            opacity: 0,
            stagger: 1,
            scrollTrigger: {
              trigger: ".projects",
              start: "top 80%",
              end: "tpo 80%",
              // markers: true,
              scrub: 2,
            },
          });
    
          gsap.from(".project-card img", {
            opacity: 0,
            x: -60,
            rotate: 25,
            scrollTrigger: {
              trigger: ".project-card",
              start: "top 80%",
              end: "top 80%",
              scrub: 2,
              // markers: true,
            },
          });
          // -----------------------------------------R-Project End---------------------------------
    
          // ----------------------Last h1 Start---------------------
          gsap.from(".last-h1 h1", {
            opacity: 0,
            stagger: 1,
            scrollTrigger: {
              trigger: ".project-card h1",
              start: "top 30%",
              end: "top 30%",
              scrub: 2,
              // markers: true,
            },
          });
    
          gsap.from(".last-h1 .lb", {
            opacity: 0,
            x: 200,
            scrollTrigger: {
              trigger: ".project-card a",
              start: "top 45%",
              end: "top 45%",
              scrub: 2,
              // markers: true,
            },
          });
          // ----------------------Last h1 End---------------------
        });
      })
      // --------------------GSAP Animation End----------------------------

  
  // ------------------- API Start ----------------------------
  const [image, setImage] = useState([]);

  const getImage = async () => {
    const response = await axios.get("https://portfolio-api-wnrc.onrender.com/api/img/");
    //  console.log(response.data)
    setImage(response.data);
  };

  console.log(image);

  useEffect(() => {
    getImage();
  }, []);
  // ------------------- API End -----------------------

  return (
    <>
      {/* ---------------------------------------Home Start--------------------------------------- */}
      <div className="home">
        <h1 className="hero-h1">
          <div className="circle"></div>
          <span className="hello">Hello,</span> <span className="im">I'm</span>
          <br />
          <span className="name">Kunal Raj Pal</span>
        </h1>
        <p className=" mt-3" id="homep">
        I create innovative, dynamic websites with smooth animations and interactive UIs, turning <br id="home-br"/>ideas into engaging digital experiences that connect with and inspire users.
        </p>
        <div className="techs mx-auto">
          <div id="django" className="tech-logo">
            <img
              className="h-50 skill-img"
              src={"https://portfolio-api-wnrc.onrender.com/media/images/django.png"}
              alt=""
            />
          </div>
          <div id="gsap" className="tech-logo">
            <img
              className="h-50 skill-img"
              src={"https://portfolio-api-wnrc.onrender.com/media/images/react.png"}
              alt=""
            />
          </div>
          <div id="js" className="tech-logo">
            <img
              className="h-50 skill-img"
              src={"https://portfolio-api-wnrc.onrender.com/media/images/gsap.png"}
              alt=""
            />
          </div>
          <div id="html" className="tech-logo">
            <img
              className="h-50 skill-img"
              src={"https://portfolio-api-wnrc.onrender.com/media/images/tailwind.png"}
              alt=""
            />
          </div>
          <div id="css" className="tech-logo">
            <img
              className="h-50 skill-img"
              src={"https://portfolio-api-wnrc.onrender.com/media/images/bootstrap.png"}
              alt=""
            />
          </div>
          <div id="github" className="tech-logo">
            <img
              className="h-50 skill-img"
              src={"https://portfolio-api-wnrc.onrender.com/media/images/github.png"}
              alt=""
            />
          </div>
        </div>
      </div>
      {/* ---------------------------------------Home End--------------------------------------- */}

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
                Welcome to my portfolio! I specialize in building dynamic, animated websites with stunning UIs. Explore my live projects to see how I combine cutting-edge technologies to bring ideas to life with smooth animations and engaging design.
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
                  Experienced in crafting visually striking & animated, high-functioning
                  web apps optimized for all plateforms.
                </p>
              </div>
            </span>

            <span id="abt-spn4" className="d ">
              <img src={"https://portfolio-api-wnrc.onrender.com/media/images/ds.png"} alt="" />
              <div className="rght ms-2">
                <h1>Technical Skills</h1>
                <p>
                  Expertise in Django, React, SQL, DRF, and GSAP, I create seamless, interactive user experiences. Proficient in Django for backend
                  development, with experience in SQLite and PostgreSQL
                  database. Familiar with Git, GitHub, Vercel,project management
                  and deployment. Focused on creating engaging,
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
            <a href="https://github.com/Kunal-Raj-Pal">
              <img
                className="githubsm"
                src={"https://portfolio-api-wnrc.onrender.com/media/images/github.png"}
                alt=""
              />
            </a>
            <a href="https://www.linkedin.com/in/kunal-raj-pal/">
              <img
                className="linkdin"
                src={"https://portfolio-api-wnrc.onrender.com/media/images/linkdin.png"}
                alt=""
              />
            </a>
            <a href="https://www.instagram.com/kunal_raj_pal">
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
          <img src={"https://portfolio-api-wnrc.onrender.com/media/images/food.png"} alt="" />
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
        <h1>
          Have a project in mind?
          <br /> Let’s build something together!
        </h1>
        <button className="lb">
          <Link to="/contact/">Contact</Link>
        </button>
      </div>
    </>
  );
}

export default Home;
