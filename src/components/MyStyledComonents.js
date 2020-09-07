import styled from "@emotion/styled";
import { Form } from "react-bootstrap";

// Page Elements //

const MainDiv = styled.main`
  /* Sets Responsive Margin for Main Page Container */
  padding: 5vh calc((100vw - 345px) / 2) 0.5rem;
  @media screen and (min-width: 425px) {
    padding: 0.7rem calc((100vw - 400px) / 2);
  }
  @media screen and (min-width: 600px) {
    padding: 0.5rem calc((100vw - 580px) / 2);
  }
  @media screen and (min-width: 800px) {
    padding: 0.5rem calc((100vw - 900px) / 2);
  }
  @media screen and (min-width: 1200px) {
    padding: 2rem calc((100vw - 1200px) / 2);
  }
  @media screen and (min-width: 1366px) {
    padding: 2.2rem calc((100vw - 1280px) / 2);
  }
  @media screen and (min-width: 1440px) {
    padding: 2rem calc((100vw - 1440px) / 2);
  }
`;

const BodyText = styled.p`
  letter-spacing: 0.1px;
  color: #fff;
  @media screen and (min-width: 1024px) {
    text-align: unset;
  }
`;

// Custom H1 Tag //
const Header = styled.h1`
  text-align: center;
  font-family: "Josefin Sans", sans-serif;
  color: #fff;
  @media screen and (min-width: 1440px) {
    font-size: 40px;
    text-align: unset;
  }
`;

// Custom List Tag //
const ListItem = styled.li`
  font-size: 14px;
`;

// EXTERNAL LINK //
const ExternalLink = styled.a`
  color: #4f4f4f;
  font-family: "Rubik", sans-serif;
  font-size: 14px;
  font-weight: normal;
  line-height: 0.5;
  margin: 0 0.5rem 0 0;
  padding: 0.7rem;
  text-decoration: none;
  transition: 0.2s ease-in-out;
  @media (min-width: 998px) {
    font-size: 12px;
    line-height: 1;
  }

  @media (min-width: 1400px) {
    font-size: 14px;
  }
  &:hover {
    color: #7a7a7a;
    transform: scale(1.1);
    text-decoration: none;
  }
`;

// Footer Elements //
const FooterText = styled.p`
  color: #4f4f4f;
  font-family: "Rubik", sans-serif;
  font-size: 14px;
  font-weight: normal;
  line-height: 1.4;
  margin: 0 0.5rem 0 0;
  padding: 0.7rem;
  text-align: center;
  @media screen and (min-width: 768px) {
    text-align: unset;
  }
  @media (min-width: 998px) {
    font-size: 12px;
    line-height: 1;
  }

  @media (min-width: 1400px) {
    font-size: 14px;
  }
`;

// Pre-Styled HTML Footer Tag //
const FooterTag = styled.footer`
  background-color: #61f4de;
  padding: 2rem calc((100vw - 1366px) / 2);

  @media only screen and (min-width: 800px) {
    padding: 2rem calc((100vw - 1366px) / 2);
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }

  @media (min-width: 998px) {
    padding: 0.5rem calc((100vw - 900px) / 2);
  }

  @media (min-width: 1400px) {
    padding: 0.5rem calc((100vw - 1366px) / 2);
  }
`;

const FormLabel = styled(Form.Label)`
  font-weight: bold;
`;

export { BodyText, Header, ExternalLink, FooterText, FooterTag, MainDiv, ListItem, FormLabel };
