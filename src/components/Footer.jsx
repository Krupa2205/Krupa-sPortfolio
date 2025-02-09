import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import instagram from "../assets/img/instagram.svg"; 
import linkedin from "../assets/img/linkedin.svg"; 
import emailIcon from "../assets/img/email.svg"; 
import githubIcon from "../assets/img/github.svg"; 

export const Footer = () => {
  return (
    <footer className="footer py-5 bg-dark text-white" style={{ minHeight: "120px" }}>
      <Container>
        <Row className="align-items-center">
          <Col xs={12} sm={6} className="text-center text-sm-start">
            <img src={logo} alt="Company Logo" width={150} />
          </Col>
          <Col xs={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon d-flex justify-content-center justify-content-sm-end gap-3">
              <a href="mailto:your-email@example.com">
                <img src={emailIcon} alt="Email" width={30} />
              </a>
              <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer">
                <img src={githubIcon} alt="GitHub" width={30} />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <img src={instagram} alt="LinkedIn" width={30} />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <img src={linkedin} alt="Twitter" width={30} />
              </a>
            </div>
            <p className="mt-3 mb-0 fst-italic">"The only way to do great work is to love what you do." - Steve Jobs</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
