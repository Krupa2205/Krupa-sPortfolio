import { Container, Row, Col } from "react-bootstrap";
// import logo from "../assets/img/logo.svg";
import instagram from "../assets/img/instagram.svg"; 
import linkedin from "../assets/img/linkedin.svg"; 
import emailIcon from "../assets/img/email.svg"; 
import githubIcon from "../assets/img/github.svg"; 

export const Footer = () => {
  return (
    <footer className="footer bg-dark text-white">
      <Container className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: "180px" }}>
        <Row className="w-100 text-center">
          <Col xs={12}>
          <p><b> Connect with me here✨🔗</b></p>
            <div className="social-icon d-flex justify-content-center gap-4">
              <a href="mailto:krupakaklotar22@gmail.com">
                <img src={emailIcon} alt="Email" width={30} />
              </a>
              <a href="https://github.com/Krupa2205" target="_blank" rel="noopener noreferrer">
                <img src={githubIcon} alt="GitHub" width={30} />
              </a>
              <a href="http://instagram.com/" target="_blank" rel="noopener noreferrer">
                <img src={instagram} alt="Instagram" width={30} />
              </a>
              <a href="https://www.linkedin.com/in/kaklotar-k/" target="_blank" rel="noopener noreferrer">
                <img src={linkedin} alt="LinkedIn" width={30} />
              </a>
            </div>
          </Col>
          <Col xs={12}>
          <div className="fun-captions mt-4 text-white font-bold">
              <p className="caption">💻 <b>404 – Footer Not Found... Just Kidding! 😆</b></p>
              <p className="caption">🔧 <b>Debugging: The art of removing one bug and adding two. 🤦‍♂️</b></p>
              <p className="caption">🏗 <b>Built with 1% coding, 99% Googling. 📚🔍</b></p>
              <p className="caption">🔄 <b>Ctrl + C, Ctrl + V = Developer Superpower! ⚡</b></p>
              <p className="caption">🎯 <b>Mission: Write code that works. Reality: Write code that barely works. 😂</b></p>
              <p className="caption">🐛 <b>No bugs were harmed in making this website... Maybe. 😜</b></p>
              <p className="caption">🔥 <b>"while not success: tryAgain() – My Life in a Loop 😅"
              </b></p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

