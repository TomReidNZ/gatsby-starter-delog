import React from "react";
import { Link } from "gatsby";
import { Container, Nav } from "react-bootstrap";
// import PillLinkList from "../../Components/PillLinkList";
import "./Footer.scss";
import { Badge } from "react-bootstrap";

import config from "../../../data/SiteConfig";
import SocialMedia from "../../components/SocialMedia";
// const items = ["azure", "react"]
var topicsToLoad = [
  { title: "AI", slug: "ai" },
  // { title: "Audio", slug: "audio" },
  { title: "Business", slug: "business" },
  // { title: "Deep Learning", slug: "deep-learning" },
  // { title: "Ethics", slug: "ethics" },
  // { title: "Philosophy", slug: "philosophy" },
  { title: "Technology", slug: "technology" },
  // { title: "Travel", slug: "travel" }
];
const Footer = () => (
  <footer className="footer">
    <Container id="footer-container">
      <div className="tiny-footer-border" />
      <div className="footer-border-container">
        <SocialMedia userLinks={config.userLinks} className="flex-column" />
      </div>
    </Container>
  </footer>
);

export default Footer;
