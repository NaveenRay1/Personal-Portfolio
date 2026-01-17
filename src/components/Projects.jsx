import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import foreverImg from "../assets/img/forever-project.png";
import projImg2 from "../assets/img/portfolio.png";
import projImg3 from "../assets/img/netflixClone.png";
import noir from "../assets/img/noir.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  // 1. MAIN PROJECTS DATA
  const projects = [
   {
      title: "FOREVER",
      description: "Frontend E-commerce Platform (Live)",
      imgUrl: foreverImg, 
      link: "https://forever-seven-phi.vercel.app" 
    },
    {
      title: "Netflix Clone", 
      description: "React, TMDB API",
      imgUrl: projImg3, 
      link: "https://netflix-clone-tau-rosy.vercel.app"
    },
    {
      title: "Personal Portfolio",
      description: "React.js & Animations (This Site!)",
       imgUrl: projImg2,
      link: "https://naveen-ray-portfolio.vercel.app" 
    },
  ];


  const miniProjects = [
    {
      title: "NOIR",
      description: "Dark Themed UI Design (HTML/CSS)",
      imgUrl: noir, // 
      link: "https://noir-naveenray1.vercel.app" 
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>My flagship project is <b>FOREVER</b>, a comprehensive e-commerce platform. I focus on building scalable, user-friendly applications with modern technologies like React and the MERN stack.</p>
                
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Main Project</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Mini Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Resume</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    

                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>


                    <Tab.Pane eventKey="second">
                      <Row>
                        {
                          miniProjects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>


                    <Tab.Pane eventKey="third">
                      <div className="resume-download-container" style={{ textAlign: "center", padding: "20px" }}>
                        <p>
                          My Resume detailing my B.Tech (2026) coursework, technical skills (React.js, MERN, DSA), 
                          and latest projects is available for download.
                        </p>
                        

                        <a href="/resume.pdf" download="Naveen_Ray_Resume.pdf">
                          <button style={{
                            background: "linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%)",
                            border: "1px solid rgba(255, 255, 255, 0.5)",
                            padding: "14px 34px",
                            color: "#fff",
                            fontSize: "18px",
                            fontWeight: "700",
                            marginTop: "20px",
                            cursor: "pointer",
                            borderRadius: "10px"
                          }}>
                            Download Resume
                          </button>
                        </a>
                      </div>
                    </Tab.Pane>

                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="bg-shape"></img>
    </section>
  )
}