import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/APIIMG.jpg";
import projImg2 from "../assets/img/WAIMG.jpg";
import projImg3 from "../assets/img/TrendvibeIMG.jpg";
import ProjImg4 from "../assets/img/Weather.webp";
import ProjImg5 from "../assets/img/VLC.webp";
import ProjImg6 from "../assets/img/Portfolio.webp";
import colorSharp2 from "../assets/img/color-sharp2.png";
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const projects = [
    {
      title: "Web Development",
      description: "API Data Fetcher",
      imgUrl: projImg1,
      link: "https://krupa2205.github.io/API_Tool/"
    },
    {
      title: "Web Development",
      description: "Whatsapp Clone",
      imgUrl: projImg2,
      link: "https://wa-clone-522b8.web.app/login"
    },
    {
      title: "Web Development",
      description: "Trendvibe-Ecommerce",
      imgUrl: projImg3,
      link: "https://trend-vibe-nine.vercel.app/"
    },
    {
      title: "Web Development",
      description: "Weather Application",
      imgUrl: ProjImg4,
      link: "https://krupa2205.github.io/Weather_App/"
    },
    {
      title: "Web Development",
      description: "VLC Media Player",
      imgUrl: ProjImg5,
      link: "https://krupa2205.github.io/VLC_APP/"
    },
    {
      title: "Web Development",
      description: "Portfolio",
      imgUrl: ProjImg6,
      link: "https://krupa-s-portfolio.vercel.app/"
    }
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Projects</h2>
                <p>Innovative Web Solutions: Showcasing My Development Journey, A Glimpse of My Work✨</p>
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
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background" />
    </section>
  )
}
