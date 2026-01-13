import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import githubIcon from "../assets/img/github.svg";
import leetcodeIcon from "../assets/img/leetcode.png";
import gfgIcon from "../assets/img/geeksforgeeks.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">

              <a href="https://github.com/NaveenRay1" target="_blank">
                <img src={githubIcon} alt="GitHub" />
              </a>
              <a href="https://leetcode.com/u/Naveen_Ray_17/" target="_blank">
                <img
                  src={leetcodeIcon}
                  alt="LeetCode"
                  style={{ width: "18px", height: "18px" }}
                />
              </a>
              <a
                href="https://www.geeksforgeeks.org/profile/navennnn01?tab=activity"
                target="_blank"
              >
                <img src={gfgIcon} alt="GFG" />
              </a>
            </div>
            <p>Copyright 2026. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
