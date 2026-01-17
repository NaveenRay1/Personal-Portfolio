import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import foreverImg from "../assets/img/forever-project.png";
import projImg2 from "../assets/img/portfolio.png";
import projImg3 from "../assets/img/netflixClone.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
   {
      title: "FOREVER",
      description: "Frontend E-commerce Platform (Live)",
      imgUrl: foreverImg, 
      link: "https://forever-seven-phi.vercel.app" 
    },
    {
      title: "Netflix Clone", 
      description: "React, TMDB API ",
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
                      <p>I also build smaller clones and tools to practice specific libraries. Check out my GitHub for my UI experiments and smaller tools.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>My Resume detailing my B.Tech (2026) coursework and technical skills will be available for download here.</p>
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